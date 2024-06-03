import { mergeWith } from 'lodash-es'
import path from 'path'
import { KVSqliteResFuncParams, KVSqliteResFunc } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings, AIPromptType } from './prompt-settings';
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
    if (!this.initDir) {
      this.initDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'prompts')
    }
    super.initDB()
  }

  _getPrompt(modelName: string, type?: AIPromptType): AIPromptResult|false {
    const db = this.db
    // TODO: `db.list` should implement a json value filter.
    const prompts = (db.list() as AIPromptSettings[])
      .filter(prompt => !type || prompt.type === type)
      .sort((a,b) => (b.priority ?? 0) - (a.priority ?? 0))
    let result: {prompt: AIPromptSettings, version: AIPromptFitResult|AIPromptFitResult[]}|false = false
    for (let prompt of prompts) {
      const version = promptIsFitForLLM(prompt, modelName)
      if (version) {
        if (prompt.extends) {
          const parent = this.get({id: prompt.extends})
          if (parent) {
            // defaults(prompt, parent)
            prompt = merge(parent, prompt)
          }
        }
        result = {
          prompt,
          version,
        }
        break
      }
    }
    return result
  }

  get(params: KVSqliteResFuncParams) {
    let result = super.get(params)
    if (result?.extends) {
      const parent = this.get({id: result.extends})
      if (parent) {
        result = merge(parent, result)
      }
    }
    return result
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

/**
 * merge with concat array
 **/
function merge(target: any, ...source: any[]) {
  return mergeWith(target, ...source, (objValue, srcValue) => {
    if (Array.isArray(objValue) && srcValue !== undefined) {
      return objValue.concat(srcValue)
    }
  })
}