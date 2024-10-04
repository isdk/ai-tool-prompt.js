[**@isdk/ai-tool-prompt**](../README.md) • **Docs**

***

[@isdk/ai-tool-prompt](../globals.md) / findPrompt

# Function: findPrompt()

> **findPrompt**(`prompts`, `modelFileName`, `options`): `Promise`\<`false` \| `object`\>

Finds a suitable prompt from an array of prompt settings based on the given model name and optional parameters.

## Parameters

• **prompts**: [`AIPromptSettings`](../interfaces/AIPromptSettings.md)[]

An array of AI prompt settings to search through.

• **modelFileName**: `string`

The name of the model to check compatibility with.

• **options** = `{}`

An object containing optional parameters:

• **options.getById?**

An optional function to retrieve a prompt by its ID.

• **options.type?**: [`AIPromptType`](../type-aliases/AIPromptType.md)

An optional filter for the type of prompt to include in the search.

## Returns

`Promise`\<`false` \| `object`\>

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
console.log(result); // Output: { prompt: { _id: "sp1", type: "system", parameters: {temperature: 0.8}, ... }, version: '@' }
```

## Defined in

[packages/ai-tool-prompt/src/prompt.ts:145](https://github.com/isdk/ai-tool-prompt.js/blob/0136bd578ac5c79f75e3197311fc0252c414fe6f/src/prompt.ts#L145)
