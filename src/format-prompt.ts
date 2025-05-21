import { defaultsDeep, omit } from 'lodash-es'
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
  const args = getPromptSettings(data, chatTemplate)
  const result = await PromptTemplate.format(args)
  return result
}

export function getPromptSettings(data: PromptTemplateData, chatTemplate: AIPromptResult) {
  const version = data.version
  let promptSettings = chatTemplate.prompt

  const rootPrompt = promptSettings.prompt
  if (version) {promptSettings = getVersionPromptSettings(version, promptSettings)}

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
  if (promptSettings.version && promptSettings.version[version]) {
    promptSettings = defaultsWithConcat({}, promptSettings.version[version], promptSettings)
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
