[**@isdk/ai-tool-prompt**](../README.md)

***

[@isdk/ai-tool-prompt](../globals.md) / AIPromptSettings

# Interface: AIPromptSettings

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:58](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L58)

## Extended by

- [`AIPrompt`](../classes/AIPrompt.md)

## Properties

### \_id?

> `optional` **\_id**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:59](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L59)

***

### 创?

> `optional` **创**: [`ActivityRecord`](ActivityRecord.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:83](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L83)

***

### 签?

> `optional` **签**: `string` \| [`Signatures`](Signatures.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:84](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L84)

***

### contentType?

> `optional` **contentType**: [`AIContentType`](../type-aliases/AIContentType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:64](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L64)

***

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:65](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L65)

***

### excludeModels?

> `optional` **excludeModels**: `AIModelNameRules`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:68](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L68)

***

### extends?

> `optional` **extends**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:75](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L75)

***

### id?

> `optional` **id**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:60](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L60)

***

### input?

> `optional` **input**: `Record`\<`string`, `string`\>[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:79](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L79)

***

### modelPattern?

> `optional` **modelPattern**: `AIModelNameRules` \| \{\[`ver`: `string`\]: `AIModelNameRules`; \}

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:66](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L66)

***

### modelSize?

> `optional` **modelSize**: `string` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:67](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L67)

***

### output?

> `optional` **output**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:80](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L80)

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:74](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L74)

***

### priority?

> `optional` **priority**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:78](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L78)

***

### prompt?

> `optional` **prompt**: `DefaultPrompt`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:71](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L71)

***

### shouldThink?

> `optional` **shouldThink**: [`AIPromptThinkProfile`](AIPromptThinkProfile.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:82](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L82)

***

### supports?

> `optional` **supports**: [`AISupportObject`](AISupportObject.md) \| [`AISupportItem`](../type-aliases/AISupportItem.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:62](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L62)

***

### tag?

> `optional` **tag**: `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:81](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L81)

***

### template

> **template**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:61](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L61)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:69](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L69)

***

### type

> **type**: [`AIPromptType`](../type-aliases/AIPromptType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:63](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L63)

***

### version?

> `optional` **version**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:72](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L72)

#### Index Signature

\[`ver`: `string`\]: `DefaultPrompt`
