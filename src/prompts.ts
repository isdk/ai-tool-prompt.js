import path from 'path'
import {
  AlreadyExistsError,
  ResServerTools,
  ResServerFuncParams,
  NotFoundError,
  ErrorCode,
  FuncItem,
  CommonError,
} from "@isdk/ai-tool";

import { IKVObjItem, KVSqlite } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings } from './prompt-settings';

const PROMPTS_DB_NAME = '.promptsdb'
// const eventBus = event.runSync()

interface AIPromptsFuncParams extends AIPromptSettings, ResServerFuncParams {
  query?: string
  size?: number
  page?: number
}

export class AIPromptsFunc extends ResServerTools {
  rootDir: string|undefined
  db: KVSqlite

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)

    if (this.rootDir) {
      this.db = new KVSqlite(path.join(this.rootDir, PROMPTS_DB_NAME))
    } else {
      throw new CommonError('rootDir is required', 'AIPrompts', ErrorCode.InvalidArgument)
    }
  }

  list(options?: AIPromptsFuncParams){
    const { query, size, page } = options || {}
    const result = this.db.list(query, size, page) as unknown as AIPromptSettings

    return result;
  }

  get({_id}: AIPromptsFuncParams) {
    if (_id !== undefined) {
      const result = this.db.get(_id) as AIPromptSettings
      if (!result) {
        throw new NotFoundError(_id, 'AIPrompts.get')
      }
    } else {
      throw new CommonError('_id is required', 'AIPrompts.get', ErrorCode.InvalidArgument)
    }
  }

  put(model: AIPromptsFuncParams) {
    if (model._id) {
      if (this.db.isExists(model._id)) {
        this.verifyDownloaded(model)
        return this.db.set(model as IKVObjItem, { overwrite: false})
      } else {
        throw new NotFoundError(model._id, 'AIPrompts.put')
      }
    } else {
      throw new CommonError('_id is required', 'AIPrompts.put', ErrorCode.InvalidArgument)
    }
  }

  post(model: AIPromptsFuncParams) {
    if (!model._id) {
      throw new CommonError('_id is required', 'AIPrompts.post', ErrorCode.InvalidArgument)
    }

    if (this.db.isExists(model._id)) {
      throw new AlreadyExistsError(model._id, 'AIPrompts.post')
    }

    return this.db.set(model as IKVObjItem)
  }

  delete({_id}: AIPromptsFuncParams) {
    if (_id !== undefined) {
      if (this.db.isExists(_id)) {
        return this.db.del(_id)
      } else {
        throw new NotFoundError(_id, 'AIPrompts.delete')
      }
    } else {
      throw new CommonError('_id is required', 'AIPrompts.delete', ErrorCode.InvalidArgument)
    }
  }
}

AIPromptsFunc.defineProperties(AIPromptsFunc, {
  rootDir: { type: 'string' },
})
