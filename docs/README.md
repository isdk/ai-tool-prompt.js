**@isdk/ai-tool-prompt** • [**Docs**](globals.md)

***

# ai-tool-prompt

* Management of various prompts
* Collection The LLM System template prompts With Enhancement (guessing corresponding system templates based on the model file name)
* Multiple versions support under the same system prompt template file
* Recommendation of parameters for LLM models
* Extensible multiple template formats to write system prompt template: jinjia2 (hf), golang (ollama), python fstring (langchain). Here jinjia2 is used as the default template format.
* Extensible file format: `yaml`, `json`. Here yaml format is used as the default file format.

## Installation

```bash
npm install @isdk/ai-tool @isdk/ai-tool-prompt
```

## Prompt Structure

* _id: `string` (unique) - id of the prompt
* templateFormat: `'hf'|'ollama'|'langchain'` - template format of the prompt, defaults to 'hf'
* template: `string` - template of the prompt, eg, '{{messages[0].content}}'
* type: `'system'|'tool'|'char'` - type of the prompt
* prompt: `object` - default prompt template data
* modelPattern: `string|RegExpr|(string|RegExpr)[]|{[version:string]: string|RegExpr}` - pattern(s) to match the LLM model file name
* parameters: `{[ruleMatched: string]: object]}` - the default parameters of LLM models
  * the key is the matched rule named group: `id` or `group[1]`, it is lowercase always.
  * the value is parameters of the LLM model
* extends: `string` - the id of the parent prompt to inherit
* version: `{[name: string]: object}` - the version/feature info of the prompt
  * the key is the name of the version/feature
  * the value is the prompt to overwrite.

The Current Default System Prompt Templates: [here](./prompts/)

The `YAML`(`.yaml`|`.yml`) and `JSON`(`.json`) file format are supported.

## Usage

The following code snippet shows how to use the prompts by `AIPromptsFunc` sqilteDB.

```js
import { AIPromptsFunc } from '@isdk/ai-tool-prompt';

const promptsDB = new AIPromptsFunc(AIPromptsName, {dbPath: ':memory:'})
// load default system template prompts automatically into sqliteDB
await promptsDB.initData()

const promptInfo = await promptsDB.$getPrompt({ model: 'qwen2.5-7b-it.gguf', type: 'system' })
console.log(promptInfo)
// {prompt: ..., version: 'qwen'}
```

The following code snippet shows how to use the prompts by `findPrompt` function.

```js
import { parse as parseIni } from 'ini'
import { ConfigFile, getConfigs } from '@isdk/ai-tool';
import { findPrompt } from '@isdk/ai-tool-prompt';

// add your prompt file format parser
ConfigFile.register(['.ini'], parseIni)

// load all prompts from your prompts directory, searh all .ini|json|yaml|yml files
const prompts = getConfigs('dir/your-prompts-dir')
const promptInfo = await findPrompt(prompts, 'qwen2.5-7b-it.gguf', { type: 'system' })
```
