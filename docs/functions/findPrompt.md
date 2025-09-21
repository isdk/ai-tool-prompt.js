[**@isdk/ai-tool-prompt**](../README.md)

***

[@isdk/ai-tool-prompt](../globals.md) / findPrompt

# Function: findPrompt()

> **findPrompt**(`prompts`, `modelFileName`, `options`): `Promise`\<`false` \| \{ `id`: `string`; `prompt`: [`AIPromptSettings`](../interfaces/AIPromptSettings.md); `version`: `string` \| `string`[]; \}\>

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt.ts:224](https://github.com/isdk/ai-tool-prompt.js/blob/a2b49ef3337bf83b9b81d4bcb9555a8f6044965e/src/prompt.ts#L224)

Finds a suitable prompt from an array of prompt settings based on the given model name and optional parameters.

## Parameters

### prompts

[`AIPromptSettings`](../interfaces/AIPromptSettings.md)[]

An array of AI prompt settings to search through.

### modelFileName

`string`

The name of the model to check compatibility with.

### options

An object containing optional parameters:

#### getById?

(`id`) => `undefined` \| [`AIPromptSettings`](../interfaces/AIPromptSettings.md) \| `Promise`\<`undefined` \| [`AIPromptSettings`](../interfaces/AIPromptSettings.md)\>

An optional function to retrieve a prompt by its ID.

#### size?

`string` \| `number`

An optional the parameter size of the modelFileName

#### type?

[`AIPromptType`](../type-aliases/AIPromptType.md)

An optional filter for the type of prompt to include in the search.

## Returns

`Promise`\<`false` \| \{ `id`: `string`; `prompt`: [`AIPromptSettings`](../interfaces/AIPromptSettings.md); `version`: `string` \| `string`[]; \}\>

An object containing the matched prompt and its version, or `false` if no match is found.

## Example

```ts
const prompts = [
  { _id: "sp1", type: "system", priority: 10, extends: "sp2", modelPattern: /^model-\d+/, ... },
  { _id: "sp2", type: "system", priority: 5, parameters: {temperature: 0.8}, ... },
  { _id: "cp3", type: "char", priority: 8, ... }
];

const result = findPrompt(prompts, "model-1", { type: "system" });
// '@' means the default version
console.log(result); // Output: { id: "sp1", prompt: { _id: "sp1", type: "system", parameters: {temperature: 0.8}, ... }, version: '@' }
```
