import { AdvancePropertyManager } from 'property-manager';
import { Config } from './config'
import { isModelNameMatched } from '@isdk/ai-tool';
import { AIPromptSchema, AIPromptSettings } from './prompt-settings';

// 128271: 🔏
const LockedMagic = 128271

export interface AIPrompt extends AIPromptSettings {}

export function strIsLocked(value: string) {
  return (value && value.codePointAt(0) === LockedMagic)
}

// @ means the default version,
export type AIPromptFitResult = '@' | string | undefined

export function promptIsFitForLLM(prompt: AIPromptSettings, modelName: string) {
  const rules = prompt.rule
  let result: AIPromptFitResult
  if (rules) {
    if (Array.isArray(rules)) {
      if (isModelNameMatched(modelName, rules)) {
        result = '@'
      }
    } else if (typeof rules === 'object' && !(rules instanceof RegExp)) {
      for (const [version, rule] of Object.entries(rules)) {
        if (isModelNameMatched(modelName, rule)) {
          result = version
          break
        }
      }
    } else if (isModelNameMatched(modelName, rules)) {
      result = '@'
    }
  }
  return result
}

/**
 * Represents an AIPrompt
 */
export class AIPrompt extends AdvancePropertyManager {
  importFromFile(filepath: string) {
    const src = Config.loadSync(filepath)
    if (src) {this.assign(src)}
  }

  /**
   * Checks whether the provided string or the current template (if not provided) is locked.
   *
   * @param template - The template to check for lock status. If not provided, uses the current template.
   * @returns `true` if the template is locked, `false` otherwise.
   */
  isLocked(template?: string) {
    if (!template) {template = this.template}
    return strIsLocked(template)
  }

  /**
   * Determines the fit result for the specified LLM model name with respect to this AIPrompt.
   *
   * The fit result can be one of the following:
   * - `'@'`: The default version, indicating the good fit.
   * - `string`: A specific version or identifier associated with a good fit.
   * - `undefined`: No fit or compatibility found.

   * @param modelName - The name of the LLM model to check for compatibility.
   * @returns The fit result for the given LLM model, representing its compatibility or suitability with this AIPrompt.
   */
  isFitForLLM(modelName: string) : AIPromptFitResult {
    return promptIsFitForLLM(this, modelName)
  }
}

AIPrompt.defineProperties(AIPrompt, AIPromptSchema)
