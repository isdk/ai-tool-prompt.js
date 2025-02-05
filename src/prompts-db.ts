import path from 'path'
import { fileURLToPath } from 'url';
import { KVSqliteResFuncParams, KVSqliteResFunc } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings, AIPromptType } from './prompt-settings';
import { AIPromptResult, findPrompt, getLLMParameters, mergeWithConcatArray } from './prompt';
import { CommonError, ErrorCode } from '@isdk/ai-tool';

import './regexp-to-json'

// const PROMPTS_DB_NAME = '.promptsdb'
// const eventBus = event.runSync()
export const AIPromptsName = 'prompts'

interface AIPromptsFuncParams extends Partial<AIPromptSettings>, KVSqliteResFuncParams {
  id?: any
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export class AIPromptsFunc extends KVSqliteResFunc<AIPromptsFuncParams> {

  async initData(initDir?: string, collection?: string) {
    if (!initDir) {
      initDir = this.initDir || path.resolve(__dirname, '..', 'prompts')
    }
    return super.initData(initDir, collection)
  }

  async _getPrompt(modelName: string, type?: AIPromptType, size?: number|string) {
    const db = this.db
    // TODO: `db.list` should implement a json value filter.
    const prompts = (db.list() as AIPromptSettings[])
    const getById = (id: string) => super.get({id}) as AIPromptSettings
    const result = await findPrompt(prompts, modelName, {size, type, getById})
    return result
  }

  get(params: KVSqliteResFuncParams) {
    let result = super.get(params)
    if (result?.extends) {
      const parent = this.get({id: result.extends})
      if (parent) {
        result = mergeWithConcatArray(parent, result)
      }
    }
    return result as AIPromptSettings
  }

  $getDefaultPrompt(type?: string): AIPromptResult {
    let id = 'default'
    if (type && type !== 'system') {
      id = type + '|default'
    }
    let prompt = this.get({id})
    if (!prompt && (!type || type === 'system')) {
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
    return {prompt, id}
  }

  async $getPrompt({model, type, modelSize}: AIPromptsFuncParams) {
    if (!model) {
      throw new CommonError('model is required', this.name + '.getPrompt', ErrorCode.InvalidArgument)
    }
    const result = await this._getPrompt(model, type, modelSize)
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
