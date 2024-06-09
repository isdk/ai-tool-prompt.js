[@isdk/ai-tool-prompt](README.md) / Exports

# @isdk/ai-tool-prompt

## Table of contents

### Classes

- [AIPrompt](classes/AIPrompt.md)
- [AIPromptsFunc](classes/AIPromptsFunc.md)

### Interfaces

- [AIPromptResult](interfaces/AIPromptResult.md)
- [AIPromptSettings](interfaces/AIPromptSettings.md)
- [ActivityRecord](interfaces/ActivityRecord.md)
- [PromptTemplateData](interfaces/PromptTemplateData.md)
- [Signatures](interfaces/Signatures.md)

### Type Aliases

- [AIContentType](modules.md#aicontenttype)
- [AIPromptFitResult](modules.md#aipromptfitresult)
- [AIPromptType](modules.md#aiprompttype)

### Variables

- [AIContentTypes](modules.md#aicontenttypes)
- [AIPromptSchema](modules.md#aipromptschema)
- [AIPromptTypes](modules.md#aiprompttypes)
- [AIPromptsName](modules.md#aipromptsname)
- [CreationKey](modules.md#creationkey)
- [DescriptionKey](modules.md#descriptionkey)
- [PersonKey](modules.md#personkey)
- [SignatureKey](modules.md#signaturekey)
- [TimeKey](modules.md#timekey)
- [ValueKey](modules.md#valuekey)

### Functions

- [formatPrompt](modules.md#formatprompt)
- [getLLMParameters](modules.md#getllmparameters)
- [promptIsFitForLLM](modules.md#promptisfitforllm)
- [strIsLocked](modules.md#strislocked)

## Type Aliases

### AIContentType

Ƭ **AIContentType**: typeof [`AIContentTypes`](modules.md#aicontenttypes)[`number`] & `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:7](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L7)

___

### AIPromptFitResult

Ƭ **AIPromptFitResult**: ``"@"`` \| `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:29](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt.ts#L29)

___

### AIPromptType

Ƭ **AIPromptType**: typeof [`AIPromptTypes`](modules.md#aiprompttypes)[`number`] & `string`

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:4](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L4)

## Variables

### AIContentTypes

• `Const` **AIContentTypes**: readonly [``"template"``, ``"script"``]

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:6](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L6)

___

### AIPromptSchema

• `Const` **AIPromptSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | \{ `required`: `boolean` = true; `type`: `string` = 'string' } |
| `_id.required` | `boolean` |
| `_id.type` | `string` |
| `contentType` | \{ `type`: `string` = 'string' } |
| `contentType.type` | `string` |
| `description` | \{ `type`: `string` = 'string' } |
| `description.type` | `string` |
| `extends` | \{ `type`: `string` = 'string' } |
| `extends.type` | `string` |
| `input` | \{ `type`: `string` = 'array' } |
| `input.type` | `string` |
| `output` | \{ `type`: `string` = 'any' } |
| `output.type` | `string` |
| `parameters` | \{ `type`: `string` = 'any' } |
| `parameters.type` | `string` |
| `priority` | \{ `type`: `string` = 'number' } |
| `priority.type` | `string` |
| `prompt` | \{ `type`: `string` = 'any' } |
| `prompt.type` | `string` |
| `rule` | \{ `type`: `string` = 'any' } |
| `rule.type` | `string` |
| `template` | \{ `required`: `boolean` = true; `type`: `string` = 'string' } |
| `template.required` | `boolean` |
| `template.type` | `string` |
| `templateFormat` | \{ `type`: `string` = 'string' } |
| `templateFormat.type` | `string` |
| `type` | \{ `required`: `boolean` = true; `type`: `string` = 'string' } |
| `type.required` | `boolean` |
| `type.type` | `string` |
| `version` | \{ `type`: `string` = 'any' } |
| `version.type` | `string` |
| `创` | \{ `type`: `string` = 'object' } |
| `创.type` | `string` |
| `签` | \{ `type`: `string`[]  } |
| `签.type` | `string`[] |

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:49](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L49)

___

### AIPromptTypes

• `Const` **AIPromptTypes**: readonly [``"system"``, ``"tool"``, ``"char"``]

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:3](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L3)

___

### AIPromptsName

• `Const` **AIPromptsName**: ``"prompts"``

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:12](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompts.ts#L12)

___

### CreationKey

• `Const` **CreationKey**: ``"创"``

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:10](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L10)

___

### DescriptionKey

• `Const` **DescriptionKey**: ``"述"``

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:14](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L14)

___

### PersonKey

• `Const` **PersonKey**: ``"者"``

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:11](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L11)

___

### SignatureKey

• `Const` **SignatureKey**: ``"签"``

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:9](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L9)

___

### TimeKey

• `Const` **TimeKey**: ``"时"``

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:12](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L12)

___

### ValueKey

• `Const` **ValueKey**: ``"值"``

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:13](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt-settings.ts#L13)

## Functions

### formatPrompt

▸ **formatPrompt**(`data`, `promptSettings`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`PromptTemplateData`](interfaces/PromptTemplateData.md) |
| `promptSettings` | [`AIPromptSettings`](interfaces/AIPromptSettings.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[packages/ai-tool-prompt/src/format-prompt.ts:12](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/format-prompt.ts#L12)

___

### getLLMParameters

▸ **getLLMParameters**(`prompt`, `modelName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompt` | [`AIPromptSettings`](interfaces/AIPromptSettings.md) |
| `modelName` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:43](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt.ts#L43)

___

### promptIsFitForLLM

▸ **promptIsFitForLLM**(`prompt`, `modelName`): [`AIPromptFitResult`](modules.md#aipromptfitresult) \| [`AIPromptFitResult`](modules.md#aipromptfitresult)[] \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompt` | [`AIPromptSettings`](interfaces/AIPromptSettings.md) |
| `modelName` | `string` |

#### Returns

[`AIPromptFitResult`](modules.md#aipromptfitresult) \| [`AIPromptFitResult`](modules.md#aipromptfitresult)[] \| `undefined`

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:71](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt.ts#L71)

___

### strIsLocked

▸ **strIsLocked**(`value`): `boolean` \| ``""``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean` \| ``""``

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:24](https://github.com/isdk/ai-tool-prompt.js/blob/f9a9aa822561d5cb4794e5046216cf73cad3bc38/src/prompt.ts#L24)
