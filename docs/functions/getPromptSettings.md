[**@isdk/ai-tool-prompt**](../README.md)

***

[@isdk/ai-tool-prompt](../globals.md) / getPromptSettings

# Function: getPromptSettings()

> **getPromptSettings**(`data`, `chatTemplate`): `Promise`\<\{ `_id?`: `string`; `创?`: [`ActivityRecord`](../interfaces/ActivityRecord.md); `签?`: `string` \| [`Signatures`](../interfaces/Signatures.md); `contentType?`: [`AIContentType`](../type-aliases/AIContentType.md); `data`: [`PromptTemplateData`](../interfaces/PromptTemplateData.md); `description?`: `string`; `excludeModels?`: `AIModelNameRules`; `extends?`: `string`; `id?`: `string`; `input?`: `Record`\<`string`, `string`\>[]; `modelPattern?`: `AIModelNameRules` \| \{\[`ver`: `string`\]: `AIModelNameRules`; \}; `modelSize?`: `string` \| `number`; `output?`: `any`; `parameters?`: `Record`\<`string`, `any`\>; `priority?`: `number`; `prompt?`: `DefaultPrompt`; `shouldThink?`: [`AIPromptThinkProfile`](../interfaces/AIPromptThinkProfile.md); `supports?`: [`AISupportObject`](../interfaces/AISupportObject.md) \| [`AISupportItem`](../type-aliases/AISupportItem.md)[]; `tag?`: `string`[]; `template`: `string`; `templateFormat?`: `string`; `type`: [`AIPromptType`](../type-aliases/AIPromptType.md); `version?`: \{\[`ver`: `string`\]: `DefaultPrompt`; \}; \}\>

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/format-prompt.ts:20](https://github.com/isdk/ai-tool-prompt.js/blob/a2b49ef3337bf83b9b81d4bcb9555a8f6044965e/src/format-prompt.ts#L20)

## Parameters

### data

[`PromptTemplateData`](../interfaces/PromptTemplateData.md)

### chatTemplate

[`AIPromptResult`](../interfaces/AIPromptResult.md)

## Returns

`Promise`\<\{ `_id?`: `string`; `创?`: [`ActivityRecord`](../interfaces/ActivityRecord.md); `签?`: `string` \| [`Signatures`](../interfaces/Signatures.md); `contentType?`: [`AIContentType`](../type-aliases/AIContentType.md); `data`: [`PromptTemplateData`](../interfaces/PromptTemplateData.md); `description?`: `string`; `excludeModels?`: `AIModelNameRules`; `extends?`: `string`; `id?`: `string`; `input?`: `Record`\<`string`, `string`\>[]; `modelPattern?`: `AIModelNameRules` \| \{\[`ver`: `string`\]: `AIModelNameRules`; \}; `modelSize?`: `string` \| `number`; `output?`: `any`; `parameters?`: `Record`\<`string`, `any`\>; `priority?`: `number`; `prompt?`: `DefaultPrompt`; `shouldThink?`: [`AIPromptThinkProfile`](../interfaces/AIPromptThinkProfile.md); `supports?`: [`AISupportObject`](../interfaces/AISupportObject.md) \| [`AISupportItem`](../type-aliases/AISupportItem.md)[]; `tag?`: `string`[]; `template`: `string`; `templateFormat?`: `string`; `type`: [`AIPromptType`](../type-aliases/AIPromptType.md); `version?`: \{\[`ver`: `string`\]: `DefaultPrompt`; \}; \}\>
