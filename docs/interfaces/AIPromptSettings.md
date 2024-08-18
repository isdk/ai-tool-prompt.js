[@isdk/ai-tool-prompt](../README.md) / [Exports](../modules.md) / AIPromptSettings

# Interface: AIPromptSettings

## Hierarchy

- **`AIPromptSettings`**

  ↳ [`AIPrompt`](../classes/AIPrompt.md)

## Table of contents

### Properties

- [\_id](AIPromptSettings.md#_id)
- [contentType](AIPromptSettings.md#contenttype)
- [description](AIPromptSettings.md#description)
- [extends](AIPromptSettings.md#extends)
- [id](AIPromptSettings.md#id)
- [input](AIPromptSettings.md#input)
- [modelPattern](AIPromptSettings.md#modelpattern)
- [output](AIPromptSettings.md#output)
- [parameters](AIPromptSettings.md#parameters)
- [priority](AIPromptSettings.md#priority)
- [prompt](AIPromptSettings.md#prompt)
- [tag](AIPromptSettings.md#tag)
- [template](AIPromptSettings.md#template)
- [templateFormat](AIPromptSettings.md#templateformat)
- [type](AIPromptSettings.md#type)
- [version](AIPromptSettings.md#version)
- [创](AIPromptSettings.md#创)
- [签](AIPromptSettings.md#签)

## Properties

### \_id

• `Optional` **\_id**: `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:27](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L27)

___

### contentType

• `Optional` **contentType**: [`AIContentType`](../modules.md#aicontenttype)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:31](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L31)

___

### description

• `Optional` **description**: `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:32](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L32)

___

### extends

• `Optional` **extends**: `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:39](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L39)

___

### id

• `Optional` **id**: `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:28](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L28)

___

### input

• `Optional` **input**: `Record`\<`string`, `string`\>[]

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:43](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L43)

___

### modelPattern

• `Optional` **modelPattern**: `AIModelNameRules` \| \{ `[ver: string]`: `AIModelNameRules`;  }

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:33](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L33)

___

### output

• `Optional` **output**: `any`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:44](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L44)

___

### parameters

• `Optional` **parameters**: `Record`\<`string`, `any`\>

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:38](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L38)

___

### priority

• `Optional` **priority**: `number`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:42](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L42)

___

### prompt

• `Optional` **prompt**: `DefaultPrompt`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:36](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L36)

___

### tag

• `Optional` **tag**: `string`[]

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:45](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L45)

___

### template

• **template**: `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:29](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L29)

___

### templateFormat

• `Optional` **templateFormat**: `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:34](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L34)

___

### type

• **type**: [`AIPromptType`](../modules.md#aiprompttype)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:30](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L30)

___

### version

• `Optional` **version**: `Object`

#### Index signature

▪ [ver: `string`]: `DefaultPrompt`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:37](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L37)

___

### 创

• `Optional` **创**: [`ActivityRecord`](ActivityRecord.md)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:46](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L46)

___

### 签

• `Optional` **签**: `string` \| [`Signatures`](Signatures.md)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:47](https://github.com/isdk/ai-tool-prompt.js/blob/00a3593a2450159939cb2c48e2783099d3477849/src/prompt-settings.ts#L47)
