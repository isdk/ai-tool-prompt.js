import { AdvancePropertyManager } from 'property-manager';
import { ConfigFile, registerYamlTag, parseYaml } from './config'
import { isModelNameMatched } from '@isdk/ai-tool';
import { AIPromptSchema, AIPromptSettings } from './prompt-settings';

// 128271: 🔏
const LockedMagic = 128271

export { ConfigFile, parseYaml, registerYamlTag }

export interface AIPrompt extends AIPromptSettings {}

/**
 * Computes the difference between two arrays of strings, returning elements present in the src array but not in the dest array.
 * @param src - The first array of strings.
 * @param dest - The second array of strings from which we want to exclude elements.
 * @returns An array representing the difference, containing elements that are in src and not in dest.
 */
function arrayDifference(src: string[], dest: string[]): string[] {
  // Create a Set object from the dest array for efficient lookups.
  const destSet = new Set(dest);

  // Use the filter method to select elements from src that are not included in destSet.
  return src.filter(element => !destSet.has(element));
}

export function strIsLocked(value: string) {
  return (value && value.codePointAt(0) === LockedMagic)
}

// @ means the default version,
export type AIPromptFitResult = '@' | string

function getMatchedStr(matched: string|RegExpExecArray|undefined) {
  let result: string|undefined
  if (matched) {
    if (Array.isArray(matched)) {
      result = matched.groups?.id || matched[1]
    } else {
      result = matched
    }
  }
  return result
}

export function getLLMParameters(prompt: AIPromptSettings, modelName: string) {
  const rules = prompt.rule
  const parameters = prompt.parameters
  if (rules && parameters) {
    let m: string|undefined
    if (Array.isArray(rules)) {
      const matched = isModelNameMatched(modelName, rules)
      if (matched) {m = getMatchedStr(matched)}
    } else if (typeof rules === 'object' && !(rules instanceof RegExp)) {
      for (const [_version, rule] of Object.entries(rules)) {
        m = getMatchedStr(isModelNameMatched(modelName, rule))
        break
      }
    } else {
      m = getMatchedStr(isModelNameMatched(modelName, rules))
    }
    if (m) {
      return parameters[m.toLowerCase()]
    }
  }
}

function isId(id: string, modelName: string) {
  if (id === modelName) {return true}
  const lastIndex = id.lastIndexOf('|')
  return lastIndex > 0 && id.substring(0, lastIndex) === modelName
}

export function promptIsFitForLLM(prompt: AIPromptSettings, modelName: string): AIPromptFitResult|AIPromptFitResult[]|undefined {
  const rules = prompt.rule
  const result: AIPromptFitResult[] = []
  let usedVers = [] as string[]
  if (isId(prompt._id!, modelName)) {
    return '@'
  }

  if (rules) {
    if (Array.isArray(rules)) {
      if (isModelNameMatched(modelName, rules)) {
        result.push('@')
        if (prompt.version) {
          result.push(...Object.keys(prompt.version))
        }
      }
    } else if (typeof rules === 'object' && !(rules instanceof RegExp)) {
      for (const [version, rule] of Object.entries(rules)) {
        usedVers.push(version)
        if (isModelNameMatched(modelName, rule)) {
          result.push(version)
        }
      }
    } else if (isModelNameMatched(modelName, rules)) {
      result.push('@')
      if (prompt.version) {
        result.push(...Object.keys(prompt.version))
      }
    }
    if (result.length && usedVers.length && prompt.version?.length) {
      const diff = arrayDifference(Object.keys(prompt.version), usedVers)
      if (diff.length) {
        result.push(...diff)
      }
    }
  }
  return result.length ? result.length === 1 ? result[0] : result : undefined
}

/**
 * Represents an AIPrompt
 */
export class AIPrompt extends AdvancePropertyManager {
  importFromFile(filepath: string) {
    const src = ConfigFile.loadSync(filepath)
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
   * @returns The fit result(s) for the given LLM model, representing its compatibility or suitability with this AIPrompt.
   */
  isFitForLLM(modelName: string) {
    return promptIsFitForLLM(this, modelName)
  }
}

AIPrompt.defineProperties(AIPrompt, AIPromptSchema)
