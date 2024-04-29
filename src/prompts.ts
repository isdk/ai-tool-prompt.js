import path from 'path'
import { KVSqliteResFuncParams, KVSqliteResFunc } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings } from './prompt-settings';
import { getConfigs } from './config';
import { AIPromptFitResult, promptIsFitForLLM } from './prompt';
import { CommonError, ErrorCode } from '@isdk/ai-tool';

// const PROMPTS_DB_NAME = '.promptsdb'
// const eventBus = event.runSync()

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
    for (const prompt of prompts) {
      const version = promptIsFitForLLM(prompt, modelName)
      if (version) {
        return {
          prompt,
          version,
        }
      }
    }
  }

  $getPrompt({model}: AIPromptsFuncParams) {
    if (!model) {
      throw new CommonError('model is required', 'AIPromptsFunc.getPrompt', ErrorCode.InvalidArgument)
    }
    const result = this._getPrompt(model)
    return result
  }
}
