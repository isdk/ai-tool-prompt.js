# ai-tool-prompt

* Management of various prompts
* System template format prompts (guessing corresponding system templates based on the model)
* Recommendation of parameters for LLM models

## Installation

```bash
npm install @isdk/ai-tool @isdk/ai-tool-prompt
```

## Prompt Structure

* _id: `string` (unique) - id of the prompt
* templateFormat: `'hf'|'ollama'|'langchain'` - template format of the prompt, defaults to 'hf'
* template: `string` - template of the prompt, eg, '{{messages[0].content}}'
* type: `'system'|'tool'|'char'` - type of the prompt
* prompt: `object` - default prompt data
* rule: `string|RegExpr|(string|RegExpr)[]` - rule to match the LLM model name
* parameters: `{[ruleMatched: string]: object]}` - the default parameters of LLM models
  * the key is the matched rule named group: `id` or `group[1]`, it is lowercase always.
  * the value is parameters of the LLM model
* extends: `string` - the id of the parent prompt
* version: `{[name: string]: object}` - the version/feature info of the prompt
  * the key is the name of the version/feature
  * the value is the prompt to overwrite.
