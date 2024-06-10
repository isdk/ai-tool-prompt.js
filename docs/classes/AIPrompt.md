[@isdk/ai-tool-prompt](../README.md) / [Exports](../modules.md) / AIPrompt

# Class: AIPrompt

Represents an AIPrompt

## Hierarchy

- [`AIPromptSettings`](../interfaces/AIPromptSettings.md)

- `AdvancePropertyManager`

  ↳ **`AIPrompt`**

## Table of contents

### Constructors

- [constructor](AIPrompt.md#constructor)

### Properties

- [$attributes](AIPrompt.md#$attributes)
- [\_id](AIPrompt.md#_id)
- [constructor](AIPrompt.md#constructor-1)
- [contentType](AIPrompt.md#contenttype)
- [defaultOptions](AIPrompt.md#defaultoptions)
- [description](AIPrompt.md#description)
- [extends](AIPrompt.md#extends)
- [id](AIPrompt.md#id)
- [input](AIPrompt.md#input)
- [nonExported1stChar](AIPrompt.md#nonexported1stchar)
- [output](AIPrompt.md#output)
- [parameters](AIPrompt.md#parameters)
- [priority](AIPrompt.md#priority)
- [prompt](AIPrompt.md#prompt)
- [rule](AIPrompt.md#rule)
- [template](AIPrompt.md#template)
- [templateFormat](AIPrompt.md#templateformat)
- [type](AIPrompt.md#type)
- [version](AIPrompt.md#version)
- [创](AIPrompt.md#创)
- [签](AIPrompt.md#签)

### Methods

- [assign](AIPrompt.md#assign)
- [assignProperty](AIPrompt.md#assignproperty)
- [assignPropertyTo](AIPrompt.md#assignpropertyto)
- [assignTo](AIPrompt.md#assignto)
- [clone](AIPrompt.md#clone)
- [cloneTo](AIPrompt.md#cloneto)
- [defineProperties](AIPrompt.md#defineproperties)
- [exportTo](AIPrompt.md#exportto)
- [getProperties](AIPrompt.md#getproperties)
- [hasOwnProperty](AIPrompt.md#hasownproperty)
- [importFromFile](AIPrompt.md#importfromfile)
- [initialize](AIPrompt.md#initialize)
- [isFitForLLM](AIPrompt.md#isfitforllm)
- [isLocked](AIPrompt.md#islocked)
- [isPrototypeOf](AIPrompt.md#isprototypeof)
- [isSame](AIPrompt.md#issame)
- [mergeTo](AIPrompt.md#mergeto)
- [propertyIsEnumerable](AIPrompt.md#propertyisenumerable)
- [toJSON](AIPrompt.md#tojson)
- [toLocaleString](AIPrompt.md#tolocalestring)
- [toObject](AIPrompt.md#toobject)
- [toString](AIPrompt.md#tostring)
- [valueOf](AIPrompt.md#valueof)
- [assign](AIPrompt.md#assign-1)
- [create](AIPrompt.md#create)
- [defineProperties](AIPrompt.md#defineproperties-1)
- [defineProperty](AIPrompt.md#defineproperty)
- [entries](AIPrompt.md#entries)
- [freeze](AIPrompt.md#freeze)
- [fromEntries](AIPrompt.md#fromentries)
- [getOwnPropertyDescriptor](AIPrompt.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](AIPrompt.md#getownpropertydescriptors)
- [getOwnPropertyNames](AIPrompt.md#getownpropertynames)
- [getOwnPropertySymbols](AIPrompt.md#getownpropertysymbols)
- [getProperties](AIPrompt.md#getproperties-1)
- [getPrototypeOf](AIPrompt.md#getprototypeof)
- [hasOwn](AIPrompt.md#hasown)
- [is](AIPrompt.md#is)
- [isExtensible](AIPrompt.md#isextensible)
- [isFrozen](AIPrompt.md#isfrozen)
- [isSealed](AIPrompt.md#issealed)
- [keys](AIPrompt.md#keys)
- [preventExtensions](AIPrompt.md#preventextensions)
- [seal](AIPrompt.md#seal)
- [setPrototypeOf](AIPrompt.md#setprototypeof)
- [values](AIPrompt.md#values)

## Constructors

### constructor

• **new AIPrompt**(`...args`): [`AIPrompt`](AIPrompt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`AIPrompt`](AIPrompt.md)

#### Inherited from

AIPromptSettings.constructor

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:80

## Properties

### $attributes

• **$attributes**: `Properties`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### \_id

• `Optional` **\_id**: `string`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[_id](../interfaces/AIPromptSettings.md#_id)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:27](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L27)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### contentType

• `Optional` **contentType**: [`AIContentType`](../modules.md#aicontenttype)

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[contentType](../interfaces/AIPromptSettings.md#contenttype)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:31](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L31)

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### description

• `Optional` **description**: `string`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[description](../interfaces/AIPromptSettings.md#description)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:32](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L32)

___

### extends

• `Optional` **extends**: `string`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[extends](../interfaces/AIPromptSettings.md#extends)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:39](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L39)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[id](../interfaces/AIPromptSettings.md#id)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:28](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L28)

___

### input

• `Optional` **input**: `Record`\<`string`, `string`\>[]

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[input](../interfaces/AIPromptSettings.md#input)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:43](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L43)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### output

• `Optional` **output**: `any`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[output](../interfaces/AIPromptSettings.md#output)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:44](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L44)

___

### parameters

• `Optional` **parameters**: `Record`\<`string`, `any`\>

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[parameters](../interfaces/AIPromptSettings.md#parameters)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:38](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L38)

___

### priority

• `Optional` **priority**: `number`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[priority](../interfaces/AIPromptSettings.md#priority)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:42](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L42)

___

### prompt

• `Optional` **prompt**: `DefaultPrompt`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[prompt](../interfaces/AIPromptSettings.md#prompt)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:36](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L36)

___

### rule

• `Optional` **rule**: `AIModelNameRules` \| \{ `[ver: string]`: `AIModelNameRules`;  }

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[rule](../interfaces/AIPromptSettings.md#rule)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:33](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L33)

___

### template

• **template**: `string`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[template](../interfaces/AIPromptSettings.md#template)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:29](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L29)

___

### templateFormat

• `Optional` **templateFormat**: `string`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[templateFormat](../interfaces/AIPromptSettings.md#templateformat)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:34](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L34)

___

### type

• **type**: [`AIPromptType`](../modules.md#aiprompttype)

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[type](../interfaces/AIPromptSettings.md#type)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:30](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L30)

___

### version

• `Optional` **version**: `Object`

#### Index signature

▪ [ver: `string`]: `DefaultPrompt`

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[version](../interfaces/AIPromptSettings.md#version)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:37](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L37)

___

### 创

• `Optional` **创**: [`ActivityRecord`](../interfaces/ActivityRecord.md)

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[创](../interfaces/AIPromptSettings.md#创)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:45](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L45)

___

### 签

• `Optional` **签**: `string` \| [`Signatures`](../interfaces/Signatures.md)

#### Inherited from

[AIPromptSettings](../interfaces/AIPromptSettings.md).[签](../interfaces/AIPromptSettings.md#签)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:46](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt-settings.ts#L46)

## Methods

### assign

▸ **assign**(`src`, `options?`): `this`

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`this`

this object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:117

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:131

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:155

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:148

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `SimplePropDescriptors` | the defined attributes of the object |

#### Returns

`any`

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IExportOptions` | - |

#### Returns

`any`

the dest object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### importFromFile

▸ **importFromFile**(`filepath`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filepath` | `string` |

#### Returns

`void`

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:123](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt.ts#L123)

___

### initialize

▸ **initialize**(`src?`): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

`this`

this object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### isFitForLLM

▸ **isFitForLLM**(`modelName`): `undefined` \| `string` \| `string`[]

Determines the fit result for the specified LLM model name with respect to this AIPrompt.

The fit result can be one of the following:
- `'@'`: The default version, indicating the good fit.
- `string`: A specific version or identifier associated with a good fit.
- `undefined`: No fit or compatibility found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelName` | `string` | The name of the LLM model to check for compatibility. |

#### Returns

`undefined` \| `string` \| `string`[]

The fit result(s) for the given LLM model, representing its compatibility or suitability with this AIPrompt.

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:150](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt.ts#L150)

___

### isLocked

▸ **isLocked**(`template?`): `boolean` \| ``""``

Checks whether the provided string or the current template (if not provided) is locked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template?` | `string` | The template to check for lock status. If not provided, uses the current template. |

#### Returns

`boolean` \| ``""``

`true` if the template is locked, `false` otherwise.

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:134](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompt.ts#L134)

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### assign

▸ **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:188

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`\<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `PropDescriptors` |
| `recreate?` | `boolean` |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:11

___

### defineProperty

▸ **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:222

▸ **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:228

▸ **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:234

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`undefined` \| `PropertyDescriptor`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

\{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:10

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### hasOwn

▸ **hasOwn**(`o`, `v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | An object. |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.object.d.ts:25

___

### is

▸ **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### preventExtensions

▸ **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### seal

▸ **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setPrototypeOf

▸ **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
