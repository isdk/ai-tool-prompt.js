import path from 'path'
import { KVSqliteResFuncParams, KVSqliteResFunc } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings, AIPromptType } from './prompt-settings';
import { getConfigs } from './config';
import { AIPromptFitResult, getLLMParameters, promptIsFitForLLM } from './prompt';
import { CommonError, ErrorCode } from '@isdk/ai-tool';

import './regexp-to-json'

// const PROMPTS_DB_NAME = '.promptsdb'
// const eventBus = event.runSync()
export const AIPromptsName = 'prompts'

export interface AIPromptResult {
  prompt: AIPromptSettings
  version?: AIPromptFitResult | AIPromptFitResult[];
}

interface AIPromptsFuncParams extends AIPromptSettings, KVSqliteResFuncParams {
}

export class AIPromptsFunc extends KVSqliteResFunc<AIPromptsFuncParams> {

  initDB() {
    const dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'prompts');
    const configs = getConfigs(dirname)
    this.db.bulkDocs(configs);
  }

  _getPrompt(modelName: string, type?: AIPromptType): AIPromptResult|false {
    const db = this.db
    const prompts = db.list() as AIPromptSettings[]
    let result: {prompt: AIPromptSettings, version: AIPromptFitResult|AIPromptFitResult[]}|false = false
    for (const prompt of prompts) {
      if (!type || prompt.type === type) {
        const version = promptIsFitForLLM(prompt, modelName)
        if (version) {
          result = {
            prompt,
            version,
          }
          break
        }
      }
    }
    return result
  }

  $getDefaultPrompt(): AIPromptResult {
    let prompt = this.get({id: 'default'})
    if (!prompt) {
      prompt = {
        _id: 'default',
        description: 'the role should be user, system, assistant',
        templateFormat: 'hf',
        type: 'system',
        prompt: {
          system: 'This is a conversation between User and Assistant, a friendly Assistant. Assistant is helpful, kind, honest, good at writing, and never fails to answer any requests immediately and with precision.'
        },
        template:
          '{%- for message in messages %}\n' +
          "  {%- if loop.first and system and messages[0]['role'] != 'system' %}\n" +
          "    {{- system + '\\n'}}\n" +
          '  {%- endif -%}\n' +
          "  {%- if message['role'] == 'system' -%}\n" +
          "    {{- message['content'] + '\\n' -}}\n" +
          '  {%- else -%}\n' +
          "    {{- message['role']+': ' + message['content'] + '\\n' -}}\n" +
          '  {%- endif -%}\n' +
          '{%- endfor -%}\n' +
          '{%- if add_generation_prompt -%}assistant: {% endif %}'
      }
    }
    return {prompt}
  }

  $getPrompt({model, type}: AIPromptsFuncParams) {
    if (!model) {
      throw new CommonError('model is required', this.name + '.getPrompt', ErrorCode.InvalidArgument)
    }
    const result = this._getPrompt(model, type)
    return result
  }

   $getParameters({id, model}: AIPromptsFuncParams) {
    if (!model) {
      throw new CommonError('model is required', this.name + '.getParameters', ErrorCode.InvalidArgument)
    }
    let result: any
    const prompt = this.get({id})
    if (prompt) {
      result = getLLMParameters(prompt, model)
    }
    return result || null
  }
}
