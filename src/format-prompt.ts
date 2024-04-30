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
  if (version && promptSettings.version && promptSettings.version[version]) {
    promptSettings = {...promptSettings, ...promptSettings.version[version]}
  }

  const defaultPrompt = {...rootPrompt, ...promptSettings.prompt}
  const result = await PromptTemplate.format({
    ...promptSettings,
    data: {
      ...defaultPrompt,
      ...data,
    }
  })
  return result
}
