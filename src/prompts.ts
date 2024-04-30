import path from 'path'
import { KVSqliteResFuncParams, KVSqliteResFunc } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings } from './prompt-settings';
import { getConfigs } from './config';
import { AIPromptFitResult, promptIsFitForLLM } from './prompt';
import { CommonError, ErrorCode } from '@isdk/ai-tool';

import './regexp-to-json'

// const PROMPTS_DB_NAME = '.promptsdb'
// const eventBus = event.runSync()
export const AIPromptsName = 'prompts'

interface AIPromptsFuncParams extends AIPromptSettings, KVSqliteResFuncParams {
}

export class AIPromptsFunc extends KVSqliteResFunc<AIPromptsFuncParams> {

  initDB() {
    const dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'prompts');
    const configs = getConfigs(dirname)
    this.db.bulkDocs(configs);
  }

  _getPrompt(modelName: string) {
    const db = this.db
    const prompts = db.list() as AIPromptSettings[]
    let result: {prompt: AIPromptSettings, version: AIPromptFitResult|AIPromptFitResult[]}|false = false
    for (const prompt of prompts) {
      const version = promptIsFitForLLM(prompt, modelName)
      if (version) {
        result = {
          prompt,
          version,
        }
        break
      }
    }
    return result
  }

  $getPrompt({model, skill}: AIPromptsFuncParams) {
    if (!model) {
      throw new CommonError('model is required', 'AIPromptsFunc.getPrompt', ErrorCode.InvalidArgument)
    }
    const result = this._getPrompt(model)
    return result
  }
}
