import { mergeWith } from 'lodash-es'
import { AdvancePropertyManager } from 'property-manager';
import { ConfigFile, isModelNameMatched, scaleStrToParamsSize } from '@isdk/ai-tool';
import { AIPromptSchema, AIPromptSettings, AIPromptType } from './prompt-settings';

// 128271: 🔏
const LockedMagic = 128271

// @ means the default version,
export type AIPromptFitResult = '@' | string

export interface AIPromptResult {
  prompt: AIPromptSettings
  version?: AIPromptFitResult | AIPromptFitResult[];
  id?: string
}

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
  const rules = prompt.modelPattern
  const parameters = prompt.parameters
  if (rules && parameters) {
    let m: string|undefined
    if (Array.isArray(rules)) {
      const matched = isModelNameMatched(modelName, rules)
      if (matched) {m = getMatchedStr(matched)}
    } else if (typeof rules === 'object' && !(rules instanceof RegExp)) {
      for (const [_version, rule] of Object.entries(rules)) {
        m = getMatchedStr(isModelNameMatched(modelName, rule))
        if (m) {break}
      }
    } else {
      m = getMatchedStr(isModelNameMatched(modelName, rules))
    }
    let result: any
    if (m) {
      result = parameters[m.toLowerCase()]
    }
    if (!result) {result = parameters['@']}
    return result
  }
}

function isId(id: string, modelName: string) {
  if (id === modelName) {return true}
  const lastIndex = id.lastIndexOf('|')
  return lastIndex > 0 && id.substring(0, lastIndex) === modelName
}

export function promptIsFitForLLM(prompt: AIPromptSettings, modelName: string, size?: number|string): AIPromptFitResult|AIPromptFitResult[]|undefined {
  const rules = prompt.modelPattern
  const result: AIPromptFitResult[] = []
  let usedVers = [] as string[]
  if (size && prompt.modelSize && !promptIsFitSize(prompt.modelSize, size)) {return}

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
    if (result.length && usedVers.length && prompt.version) {
      // if (usedVers.length > 1) {
      //   const i = usedVers.indexOf('@')
      //   if (i >= 0) {usedVers.splice(i, 1)}
      //   console.log('🚀 ~ promptIsFitForLLM ~ usedVers:', modelName, prompt._id, usedVers)
      // }
      const diff = arrayDifference(Object.keys(prompt.version), usedVers)
      if (diff.length) {
        result.push(...diff)
      }
      if (result.length > 1) {
        const i = result.indexOf('@')
        if (i >= 0) {result.splice(i, 1)}
      }
    }
  }
  return result.length ? result.length === 1 ? result[0] : result : undefined
}

function floatEqual(a: number, b: number, epsilon: number = 1e-10): boolean {
  return Math.abs(a - b) < epsilon;
}


export function promptIsFitSize(allowedModelSize?: string|number, size?: number|string, epsilon: number = 1e-10) {
  let result = true
  if (allowedModelSize && size) {
    if (typeof size === 'string') {
      size = scaleStrToParamsSize(size)
    }
    let op = '='
    if (typeof allowedModelSize === 'string') {
      const _op = ['<=', '>=', '!=', '>', '<', '='].find(item => (allowedModelSize as string).startsWith(item))
      if (_op) {
        op = _op
        allowedModelSize = allowedModelSize.slice(op.length)
      }
      allowedModelSize = scaleStrToParamsSize(allowedModelSize)
    }
    switch (op) {
      case '>': {
        result = size > allowedModelSize
      }; break;
      case '<': {
        result = size < allowedModelSize
      }; break;
      case '=': {
        result = floatEqual(size, allowedModelSize, epsilon)
      }; break;
      case '<=': {
        result = size <= allowedModelSize
      }; break;
      case '>=': {
        result = size >= allowedModelSize
      }; break;
      case '!=': {
        result = !floatEqual(size, allowedModelSize, epsilon)
      }; break;
    }
  }
  return result
}

async function getPromptSettingsType(prompt: AIPromptSettings, getById: (id: string)=>AIPromptSettings|undefined|Promise<AIPromptSettings|undefined>) {
  let result = prompt.type
  const visited = new Set<string>()
  visited.add(prompt._id!)

  while (!result && prompt && prompt.extends && !visited.has(prompt.extends)) {
    prompt = await getById(prompt.extends) as any
    if (prompt) {
      result = prompt.type
    }
    visited.add(prompt.extends!)
  }
  return result
}

function inheritParent(result: AIPromptSettings, parent: AIPromptSettings) {
  const modelPattern = result.modelPattern
  const shouldThink = result.shouldThink
  result = mergeWithConcatArray(parent, result)
  if (modelPattern) {
    result!.modelPattern = modelPattern
  }
  if (shouldThink) {
    result!.shouldThink = shouldThink
  }
  return result
}

/**
 * Finds a suitable prompt from an array of prompt settings based on the given model name and optional parameters.
 * @param prompts - An array of AI prompt settings to search through.
 * @param modelFileName - The name of the model to check compatibility with.
 * @param options - An object containing optional parameters:
 *   @param options.size - An optional the parameter size of the modelFileName
 *   @param options.type - An optional filter for the type of prompt to include in the search.
 *   @param options.getById - An optional function to retrieve a prompt by its ID.
 * @returns An object containing the matched prompt and its version, or `false` if no match is found.
 *
 * @example
 * const prompts = [
 *   { _id: "sp1", type: "system", priority: 10, extends: "sp2", modelPattern: /^model-\d+/, ... },
 *   { _id: "sp2", type: "system", priority: 5, parameters: {temperature: 0.8}, ... },
 *   { _id: "cp3", type: "char", priority: 8, ... }
 * ];
 *
 * const result = findPrompt(prompts, "model-1", { type: "system" });
 * // '@' means the default version
 * console.log(result); // Output: { id: "sp1", prompt: { _id: "sp1", type: "system", parameters: {temperature: 0.8}, ... }, version: '@' }
 */
export async function findPrompt(prompts:AIPromptSettings[], modelFileName: string, {size, type, getById}: {size?: number|string, type?: AIPromptType, getById?: (id: string)=>AIPromptSettings|undefined|Promise<AIPromptSettings|undefined>}={}) {
  if (typeof getById !== 'function') {
    getById = ((prompts) => (id: string) => prompts.find(p => p._id === id))(prompts)
  }

  let _prompts: AIPromptSettings[] = prompts
  if (type) {
    _prompts = []
    for (const prompt of prompts) {
      const vType = await getPromptSettingsType(prompt, getById)
      if (vType === type) {
        _prompts.push(prompt)
      }
    }
  }
  _prompts = _prompts.sort((a,b) => (b.priority ?? 0) - (a.priority ?? 0))

  const get = async (id: string) => {
    let result: any = await getById(id)

    if (typeof (result as any).then === 'function') {
      // is async
      return (result as any).then(async (result?: AIPromptSettings)=>{
        if (result?.extends) {
          const parent = await get(result.extends)
          if (parent) {
            result = inheritParent(result, parent)
          }
        }
        return result
      })
    } else {
      if (result?.extends) {
        const parent = await get(result.extends)
        if (parent) {
          result = inheritParent(result, parent)
        }
      }
    return result
    }
  }

  let result: {id: string, prompt: AIPromptSettings, version: AIPromptFitResult|AIPromptFitResult[]}|false = false
  for (let prompt of _prompts) {
    const version = promptIsFitForLLM(prompt, modelFileName, size)
    if (version) { // found the prompt for the modelName
      prompt = await get(prompt._id!)!
      result = {
        id: prompt._id!,
        prompt,
        version,
      }
      break
    }
  }
  return result
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
   * @param size - The parameter size of the LLM model, if applicable.
   * @returns The fit result(s) for the given LLM model, representing its compatibility or suitability with this AIPrompt.
   */
  isFitForLLM(modelName: string, size?: number) {
    return promptIsFitForLLM(this, modelName, size)
  }
}

AIPrompt.defineProperties(AIPrompt, AIPromptSchema)

/**
 * merge with concat array for mergeing the messages etc.
 **/
export function mergeWithConcatArray(target: any, ...source: any[]) {
  return mergeWith(target, ...source, (objValue, srcValue) => {
    if (Array.isArray(objValue) && srcValue !== undefined) {
      return objValue.concat(srcValue)
    }
  })
}
