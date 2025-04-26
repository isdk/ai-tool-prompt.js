import { defaultsDeep } from 'lodash-es'
import { AIChatMessageParam, PromptTemplate } from '@isdk/ai-tool'

import { AIPromptSettings } from "./prompt-settings"

export interface PromptTemplateData {
  add_generation_prompt?: boolean
  version?: string
  messages?: AIChatMessageParam[]
  [name: string]: any
}

export async function formatPrompt(data: PromptTemplateData, promptSettings: AIPromptSettings) {
  const version = data.version

  const rootPrompt = promptSettings.prompt
  if (version) {promptSettings = getVersionPromptSettings(version, promptSettings)}

  const defaultPrompt = defaultsDeep({}, rootPrompt, promptSettings.prompt)
  data = defaultsDeep(data, defaultPrompt)
  const result = await PromptTemplate.format({
    ...promptSettings,
    data,
  })
  return result
}

export function getVersionPromptSettings(version: string, promptSettings: AIPromptSettings) {
  if (promptSettings.version && promptSettings.version[version]) {
    promptSettings = defaultsDeep({}, promptSettings.version[version], promptSettings)
  }
  return promptSettings
}
