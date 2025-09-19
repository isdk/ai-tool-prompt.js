import { defaultsDeep, omit, omitBy } from 'lodash-es'
import { AIChatMessageParam, defaultsWithConcat, PromptTemplate } from '@isdk/ai-tool'

import { AIPromptSettings, AISupportItem, AISupportObject } from "./prompt-settings"
import { AIPromptResult } from './prompt'

export interface PromptTemplateData {
  add_generation_prompt?: boolean
  version?: string
  messages?: AIChatMessageParam[]
  [name: string]: any
}

export async function formatPrompt(data: PromptTemplateData, chatTemplate: AIPromptResult) {
  const args = await getPromptSettings(data, chatTemplate)
  const result = await PromptTemplate.format(args)
  return result
}

export async function getPromptSettings(data: PromptTemplateData, chatTemplate: AIPromptResult) {
  data = keepJsonSerializable(data)

  const version = data.version
  let promptSettings = chatTemplate.prompt

  const rootPrompt = promptSettings.prompt
  if (version) {
    promptSettings = getVersionPromptSettings(version, promptSettings)
  }

  if (promptSettings.prompt) {
    promptSettings.prompt = await formatObject(promptSettings.prompt, promptSettings.templateFormat)
  }

  const defaultPrompt = defaultsDeep({}, rootPrompt, promptSettings.prompt)
  data = defaultsDeep(data, defaultPrompt)
  if (typeof chatTemplate.version === 'string') {
    data.version = chatTemplate.version
  }
  return {
    ...promptSettings,
    data,
  }
}

export function getVersionPromptSettings(version: string, promptSettings: AIPromptSettings) {
  const versionPrompt = promptSettings.version?.[version]
  if (versionPrompt) {
    promptSettings = defaultsWithConcat({}, versionPrompt, promptSettings)
  }
  if (Array.isArray(promptSettings.supports)) {
    promptSettings.supports = normalizeSupportsOption(promptSettings.supports)
  }
  return promptSettings
}

function normalizeSupportsOption(supports: AISupportItem[]|AISupportObject) {
  if (Array.isArray(supports)) {
    const result: AISupportObject = {}
    supports.forEach(item => {
      if (typeof item === 'string') {
        result[item] = true
      } else if (item && typeof item === 'object') {
        const entries = Object.entries(item)
        let id: string|undefined
        let value: any
        if (entries.length === 1) {
          id = entries[0][0]
          value = entries[0][1]
        } else {
          id = (item._id || item.id || item.name) as string
          if (id) {
            value = omit(item, ['_id', 'id', 'name'])
          }
        }
        if (id) {
          const oldValue = result[id]
          if (!Array.isArray(value) && typeof value === 'object') {
            result[id] = defaultsDeep(result[id], value)
          } else if (oldValue == null) {
            result[id] = value
          }
        }
      }
    })
    return result
  }
  return supports
}

function keepJsonSerializable(data: any) {
  return omitBy(data, (value) => value == null || (!Array.isArray(value) && isClassInstance(value)))
}

function isClassInstance(value: any) {
  return value && typeof value === 'object' && value.constructor && value.constructor !== Object
}

async function formatObject(obj: any, templateFormat?: string, data?: any) {
  if (obj) {
    if (!data) {data = obj}
   if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        const item = obj[i]
        if (item != null) {
          switch (typeof item) {
            case 'object': {
              obj[i] = await formatObject(item, templateFormat, data)
            } break;
            case 'string': {
              const v = await PromptTemplate.formatIf({template: item, templateFormat, data})
              if (v) {
                obj[i] = v
              }
            }
          }
        }
      }
    } else for (const key in obj) {
      const value = obj[key]
      console.log('🚀 ~ file: format-prompt.ts:118 ~ value:', key, value)
      if (value != null) {
        switch (typeof value) {
          case 'object': {
            obj[key] = await formatObject(value, templateFormat, data)
          } break;
          case 'string': {
            const v = await PromptTemplate.formatIf({template: value, templateFormat, data})
            console.log('🚀 ~ file: format-prompt.ts:125 ~ v:', v)
            if (v) {
              obj[key] = v
            }
          } break;
        }
      }
    }
  }
  return obj
}