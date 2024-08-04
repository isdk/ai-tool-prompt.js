import { AIChatMessageParam, AIModelNameRules } from "@isdk/ai-tool"

export const AIPromptTypes = ['system', 'tool', 'char'] as const
export type  AIPromptType = (typeof AIPromptTypes[number]) & string

export const AIContentTypes = ['template', 'script'] as const
export type  AIContentType = (typeof AIContentTypes[number]) & string

export const SignatureKey = '签'
export const CreationKey = '创'
export const PersonKey = '者'
export const TimeKey = '时'
export const ValueKey = '值'
export const DescriptionKey = '述'

export interface ActivityRecord {
  [PersonKey]: string
  [TimeKey]: Date|string
}

export interface Signatures {
  [userId: string]: string;
}

type DefaultPrompt = Record<string, string> | {system?: string, ai?: string, human?: string, end_of_turn?: string, begin_of_turn?: string, messages?: AIChatMessageParam[]}
export interface AIPromptSettings {
  _id?: string
  id?:string
  template: string
  type: AIPromptType
  contentType?: AIContentType
  description?: string
  modelPattern?: {[ver: string]: AIModelNameRules} | AIModelNameRules
  templateFormat?: string
  // the default system prompt if any
  prompt?: DefaultPrompt
  version?: {[ver: string]: DefaultPrompt}
  parameters?: Record<string, any>
  extends?: string
  // the priority of the prompt template, the higher the priority(value), the earlier it will be used
  // the low priority less than 0 indicates that if there are built-in template in the model, it will be used first.
  priority?: number
  input?: Record<string, string>[]
  output?: any
  [CreationKey]?: ActivityRecord
  [SignatureKey]?: string|Signatures
}

export const AIPromptSchema = {
  _id: {type: 'string', required: true},
  template: {type: 'string', required: true},
  type: {type: 'string', required: true},
  contentType: {type: 'string'},
  description: {type: 'string'},
  modelPattern: {type: 'any'},
  templateFormat: {type: 'string'},
  prompt: {type: 'any'},
  version: {type: 'any'},
  parameters: {type: 'any'},
  extends: {type: 'string'},
  priority: {type: 'number'},
  input: {type: 'array'},
  output: {type: 'any'},
  [CreationKey]: {type: 'object'},
  [SignatureKey]: {type: ['string', 'object']},
}
