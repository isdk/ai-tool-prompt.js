[**@isdk/ai-tool-prompt**](../README.md)

***

[@isdk/ai-tool-prompt](../globals.md) / AIPrompt

# Class: AIPrompt

Defined in: [packages/ai-tool-prompt/src/prompt.ts:18](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt.ts#L18)

Represents an AIPrompt

## Extends

- [`AIPromptSettings`](../interfaces/AIPromptSettings.md).`AdvancePropertyManager`

## Constructors

### new AIPrompt()

> **new AIPrompt**(...`args`): [`AIPrompt`](AIPrompt.md)

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:80

#### Parameters

##### args

...`any`[]

#### Returns

[`AIPrompt`](AIPrompt.md)

#### Inherited from

`AIPromptSettings.constructor`

## Properties

### \_id?

> `optional` **\_id**: `string`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:46](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L46)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`_id`](../interfaces/AIPromptSettings.md#_id)

***

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### 创?

> `optional` **创**: [`ActivityRecord`](../interfaces/ActivityRecord.md)

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:69](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L69)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`创`](../interfaces/AIPromptSettings.md#%E5%88%9B)

***

### 签?

> `optional` **签**: `string` \| [`Signatures`](../interfaces/Signatures.md)

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:70](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L70)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`签`](../interfaces/AIPromptSettings.md#%E7%AD%BE)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### contentType?

> `optional` **contentType**: [`AIContentType`](../type-aliases/AIContentType.md)

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:50](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L50)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`contentType`](../interfaces/AIPromptSettings.md#contenttype)

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

***

### description?

> `optional` **description**: `string`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:51](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L51)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`description`](../interfaces/AIPromptSettings.md#description)

***

### excludeModels?

> `optional` **excludeModels**: `AIModelNameRules`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:54](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L54)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`excludeModels`](../interfaces/AIPromptSettings.md#excludemodels)

***

### extends?

> `optional` **extends**: `string`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:61](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L61)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`extends`](../interfaces/AIPromptSettings.md#extends)

***

### id?

> `optional` **id**: `string`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:47](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L47)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`id`](../interfaces/AIPromptSettings.md#id)

***

### input?

> `optional` **input**: `Record`\<`string`, `string`\>[]

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:65](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L65)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`input`](../interfaces/AIPromptSettings.md#input)

***

### modelPattern?

> `optional` **modelPattern**: `AIModelNameRules` \| \{\}

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:52](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L52)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`modelPattern`](../interfaces/AIPromptSettings.md#modelpattern)

***

### modelSize?

> `optional` **modelSize**: `string` \| `number`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:53](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L53)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`modelSize`](../interfaces/AIPromptSettings.md#modelsize)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

***

### output?

> `optional` **output**: `any`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:66](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L66)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`output`](../interfaces/AIPromptSettings.md#output)

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `any`\>

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:60](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L60)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`parameters`](../interfaces/AIPromptSettings.md#parameters)

***

### priority?

> `optional` **priority**: `number`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:64](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L64)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`priority`](../interfaces/AIPromptSettings.md#priority)

***

### prompt?

> `optional` **prompt**: `DefaultPrompt`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:57](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L57)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`prompt`](../interfaces/AIPromptSettings.md#prompt)

***

### shouldThink?

> `optional` **shouldThink**: [`AIPromptThinkProfile`](../interfaces/AIPromptThinkProfile.md)

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:68](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L68)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`shouldThink`](../interfaces/AIPromptSettings.md#shouldthink)

***

### tag?

> `optional` **tag**: `string`[]

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:67](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L67)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`tag`](../interfaces/AIPromptSettings.md#tag)

***

### template

> **template**: `string`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:48](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L48)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`template`](../interfaces/AIPromptSettings.md#template)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:55](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L55)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`templateFormat`](../interfaces/AIPromptSettings.md#templateformat)

***

### type

> **type**: [`AIPromptType`](../type-aliases/AIPromptType.md)

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:49](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L49)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`type`](../interfaces/AIPromptSettings.md#type)

***

### version?

> `optional` **version**: `object`

Defined in: [packages/ai-tool-prompt/src/prompt-settings.ts:58](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt-settings.ts#L58)

#### Index Signature

\[`ver`: `string`\]: `DefaultPrompt`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`version`](../interfaces/AIPromptSettings.md#version)

## Methods

### assign()

> **assign**(`src`, `options`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

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

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

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

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

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

> **assignTo**(`dest`?, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

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

> **clone**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

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

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

Define the attributes of this object.

#### Parameters

##### aProperties

`SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

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

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

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

Defined in: [packages/ai-tool-prompt/src/prompt.ts:286](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt.ts#L286)

#### Parameters

##### filepath

`string`

#### Returns

`void`

***

### initialize()

> **initialize**(`src`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

***

### isFitForLLM()

> **isFitForLLM**(`modelName`, `size`?): `undefined` \| `string` \| `string`[]

Defined in: [packages/ai-tool-prompt/src/prompt.ts:314](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt.ts#L314)

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

> **isLocked**(`template`?): `boolean` \| `""`

Defined in: [packages/ai-tool-prompt/src/prompt.ts:297](https://github.com/isdk/ai-tool-prompt.js/blob/6d21e06e0e8e1b8449bddc69a03bdb7d160ce970/src/prompt.ts#L297)

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

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

> **mergeTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

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

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

***

### toObject()

> **toObject**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

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

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

###### entries

`Iterable`\<readonly \[`PropertyKey`, `T`\]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

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

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

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

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]
