[**@isdk/ai-tool-prompt**](../README.md)

***

[@isdk/ai-tool-prompt](../globals.md) / AIPrompt

# Class: AIPrompt

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt.ts:18](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt.ts#L18)

Represents an AIPrompt

## Extends

- [`AIPromptSettings`](../interfaces/AIPromptSettings.md).`AdvancePropertyManager`

## Constructors

### Constructor

> **new AIPrompt**(...`args`): `AIPrompt`

Defined in: [property-manager.js/src/abstract.d.ts:80](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L80)

#### Parameters

##### args

...`any`[]

#### Returns

`AIPrompt`

#### Inherited from

`AIPromptSettings.constructor`

## Properties

### \_id?

> `optional` **\_id**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:59](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L59)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`_id`](../interfaces/AIPromptSettings.md#_id)

***

### $attributes

> **$attributes**: `Properties`

Defined in: [property-manager.js/src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L5)

***

### 创?

> `optional` **创**: [`ActivityRecord`](../interfaces/ActivityRecord.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:83](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L83)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`创`](../interfaces/AIPromptSettings.md#创)

***

### 签?

> `optional` **签**: `string` \| [`Signatures`](../interfaces/Signatures.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:84](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L84)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`签`](../interfaces/AIPromptSettings.md#签)

***

### constructor

> **constructor**: `Function`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### contentType?

> `optional` **contentType**: [`AIContentType`](../type-aliases/AIContentType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:64](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L64)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`contentType`](../interfaces/AIPromptSettings.md#contenttype)

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: [property-manager.js/src/abstract.d.ts:74](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L74)

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

***

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:65](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L65)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`description`](../interfaces/AIPromptSettings.md#description)

***

### excludeModels?

> `optional` **excludeModels**: `AIModelNameRules`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:68](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L68)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`excludeModels`](../interfaces/AIPromptSettings.md#excludemodels)

***

### extends?

> `optional` **extends**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:75](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L75)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`extends`](../interfaces/AIPromptSettings.md#extends)

***

### id?

> `optional` **id**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:60](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L60)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`id`](../interfaces/AIPromptSettings.md#id)

***

### input?

> `optional` **input**: `Record`\<`string`, `string`\>[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:79](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L79)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`input`](../interfaces/AIPromptSettings.md#input)

***

### modelPattern?

> `optional` **modelPattern**: `AIModelNameRules` \| \{\[`ver`: `string`\]: `AIModelNameRules`; \}

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:66](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L66)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`modelPattern`](../interfaces/AIPromptSettings.md#modelpattern)

***

### modelSize?

> `optional` **modelSize**: `string` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:67](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L67)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`modelSize`](../interfaces/AIPromptSettings.md#modelsize)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [property-manager.js/src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

***

### output?

> `optional` **output**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:80](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L80)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`output`](../interfaces/AIPromptSettings.md#output)

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:74](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L74)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`parameters`](../interfaces/AIPromptSettings.md#parameters)

***

### priority?

> `optional` **priority**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:78](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L78)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`priority`](../interfaces/AIPromptSettings.md#priority)

***

### prompt?

> `optional` **prompt**: `DefaultPrompt`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:71](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L71)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`prompt`](../interfaces/AIPromptSettings.md#prompt)

***

### shouldThink?

> `optional` **shouldThink**: [`AIPromptThinkProfile`](../interfaces/AIPromptThinkProfile.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:82](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L82)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`shouldThink`](../interfaces/AIPromptSettings.md#shouldthink)

***

### supports?

> `optional` **supports**: [`AISupportObject`](../interfaces/AISupportObject.md) \| [`AISupportItem`](../type-aliases/AISupportItem.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:62](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L62)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`supports`](../interfaces/AIPromptSettings.md#supports)

***

### tag?

> `optional` **tag**: `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:81](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L81)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`tag`](../interfaces/AIPromptSettings.md#tag)

***

### template

> **template**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:61](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L61)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`template`](../interfaces/AIPromptSettings.md#template)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:69](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L69)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`templateFormat`](../interfaces/AIPromptSettings.md#templateformat)

***

### type

> **type**: [`AIPromptType`](../type-aliases/AIPromptType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:63](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L63)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`type`](../interfaces/AIPromptSettings.md#type)

***

### version?

> `optional` **version**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt-settings.ts:72](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt-settings.ts#L72)

#### Index Signature

\[`ver`: `string`\]: `DefaultPrompt`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`version`](../interfaces/AIPromptSettings.md#version)

## Methods

### assign()

> **assign**(`src`, `options?`): `this`

Defined in: [property-manager.js/src/abstract.d.ts:106](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L106)

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

`IMergeOptions`

#### Returns

`this`

this object

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [property-manager.js/src/abstract.d.ts:117](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L117)

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`string`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

the attributes object

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [property-manager.js/src/abstract.d.ts:131](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L131)

Assign the property value from the src to destination object.

#### Parameters

##### dest

`any`

The destination object

##### src

`any`

The src object

##### name

`string`

The property name

##### value

`any`

The property value

##### attrs?

`any`

The attributes object of the property

##### options?

`IMergeOptions`

#### Returns

`void`

***

### assignTo()

> **assignTo**(`dest?`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:191](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L191)

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object

***

### clone()

> **clone**(`options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:155](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L155)

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

***

### cloneTo()

> **cloneTo**(`dest`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:148](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L148)

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the new dest object

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:89](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L89)

Define the attributes of this object.

#### Parameters

##### aProperties

`SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

***

### exportTo()

> **exportTo**(`dest`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:173](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L173)

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IExportOptions`

#### Returns

`any`

the dest object.

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### importFromFile()

> **importFromFile**(`filepath`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt.ts:286](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt.ts#L286)

#### Parameters

##### filepath

`string`

#### Returns

`void`

***

### initialize()

> **initialize**(`src?`): `this`

Defined in: [property-manager.js/src/abstract.d.ts:139](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L139)

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

***

### isFitForLLM()

> **isFitForLLM**(`modelName`, `size?`): `undefined` \| `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt.ts:314](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt.ts#L314)

Determines the fit result for the specified LLM model name with respect to this AIPrompt.

The fit result can be one of the following:
- `'@'`: The default version, indicating the good fit.
- `string`: A specific version or identifier associated with a good fit.
- `undefined`: No fit or compatibility found.

#### Parameters

##### modelName

`string`

The name of the LLM model to check for compatibility.

##### size?

`number`

The parameter size of the LLM model, if applicable.

#### Returns

`undefined` \| `string` \| `string`[]

The fit result(s) for the given LLM model, representing its compatibility or suitability with this AIPrompt.

***

### isLocked()

> **isLocked**(`template?`): `boolean` \| `""`

Defined in: [@isdk/ai-tools/packages/ai-tool-prompt/src/prompt.ts:297](https://github.com/isdk/ai-tool-prompt.js/blob/1daf0234c6beea84df91d95a5a6b8f901fbeace7/src/prompt.ts#L297)

Checks whether the provided string or the current template (if not provided) is locked.

#### Parameters

##### template?

`string`

The template to check for lock status. If not provided, uses the current template.

#### Returns

`boolean` \| `""`

`true` if the template is locked, `false` otherwise.

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

***

### isSame()

> **isSame**(`src`, `options?`): `boolean`

Defined in: [property-manager.js/src/abstract.d.ts:200](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L200)

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

`IMergeOptions`

#### Returns

`boolean`

***

### mergeTo()

> **mergeTo**(`dest`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:164](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L164)

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object.

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### toJSON()

> **toJSON**(): `any`

Defined in: [property-manager.js/src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L182)

#### Returns

`any`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

***

### toObject()

> **toObject**(`options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L181)

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

***

### toString()

> **toString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

##### Parameters

###### target

`T`

The target object to copy to.

###### source

`U`

The source object from which to copy properties.

##### Returns

`T` & `U`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

###### W

`W`

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

###### source3

`W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

###### target

`object`

The target object to copy to.

###### sources

...`any`[]

One or more source objects from which to copy properties

##### Returns

`any`

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

Object to use as a prototype. May be null

`null` | `object`

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

Defined in: [property-manager.js/src/advance.d.ts:11](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L11)

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

##### aTarget

`any`

##### aProperties

`PropDescriptors`

##### recreate?

`boolean`

#### Returns

`any`

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

##### p

`PropertyKey`

The property name.

##### attributes

`PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\[`s`: `string`\]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U` *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### entries

`Iterable`\<readonly \[`PropertyKey`, `T`\]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

Returns an object created by key-value entries for properties and methods

##### Parameters

###### entries

`Iterable`\<readonly `any`[]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

##### o

`any`

Object that contains the property.

##### p

`PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/advance.d.ts:10](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L10)

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

***

### hasOwn()

> `static` **hasOwn**(`o`, `v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

Determines whether an object has a property with the specified name.

#### Parameters

##### o

`object`

An object.

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

#### Parameters

##### value1

`any`

The first value.

##### value2

`any`

The second value.

#### Returns

`boolean`

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

##### T

`T`

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

##### o

`any`

The object to change its prototype.

##### proto

The value of the new prototype or null.

`null` | `object`

#### Returns

`any`

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\[`s`: `string`\]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]
