import { AIChatMessageParam, AIModelNameRules } from "@isdk/ai-tool"

export const AIPromptTypes = ['system', 'tool', 'char'] as const
export type  AIPromptType = (typeof AIPromptTypes[number]) & string

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
  description?: string
  rule?: {[ver: string]: AIModelNameRules} | AIModelNameRules
  templateFormat?: string
  // the default system prompt if any
  prompt?: DefaultPrompt
  version?: {[ver: string]: DefaultPrompt}
  parameters?: Record<string, any>
  extends?: string
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
  description: {type: 'string'},
  rule: {type: 'any'},
  templateFormat: {type: 'string'},
  prompt: {type: 'any'},
  version: {type: 'any'},
  [CreationKey]: {type: 'object'},
  [SignatureKey]: {type: ['string', 'object']},
}
