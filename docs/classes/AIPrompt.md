[**@isdk/ai-tool-prompt**](../README.md) • **Docs**

***

[@isdk/ai-tool-prompt](../globals.md) / AIPrompt

# Class: AIPrompt

Represents an AIPrompt

## Extends

- [`AIPromptSettings`](../interfaces/AIPromptSettings.md).`AdvancePropertyManager`

## Constructors

### new AIPrompt()

> **new AIPrompt**(...`args`): [`AIPrompt`](AIPrompt.md)

#### Parameters

• ...**args**: `any`[]

#### Returns

[`AIPrompt`](AIPrompt.md)

#### Inherited from

`AIPromptSettings.constructor`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:80

## Properties

### \_id?

> `optional` **\_id**: `string`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`_id`](../interfaces/AIPromptSettings.md#_id)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:40](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L40)

***

### $attributes

> **$attributes**: `Properties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### 创?

> `optional` **创**: [`ActivityRecord`](../interfaces/ActivityRecord.md)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`创`](../interfaces/AIPromptSettings.md#%E5%88%9B)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:61](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L61)

***

### 签?

> `optional` **签**: `string` \| [`Signatures`](../interfaces/Signatures.md)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`签`](../interfaces/AIPromptSettings.md#%E7%AD%BE)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:62](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L62)

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:125

***

### contentType?

> `optional` **contentType**: [`AIContentType`](../type-aliases/AIContentType.md)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`contentType`](../interfaces/AIPromptSettings.md#contenttype)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:44](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L44)

***

### defaultOptions

> **defaultOptions**: `object`

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### description?

> `optional` **description**: `string`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`description`](../interfaces/AIPromptSettings.md#description)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:45](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L45)

***

### excludeModels?

> `optional` **excludeModels**: `AIModelNameRules`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`excludeModels`](../interfaces/AIPromptSettings.md#excludemodels)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:47](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L47)

***

### extends?

> `optional` **extends**: `string`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`extends`](../interfaces/AIPromptSettings.md#extends)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:54](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L54)

***

### id?

> `optional` **id**: `string`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`id`](../interfaces/AIPromptSettings.md#id)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:41](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L41)

***

### input?

> `optional` **input**: `Record`\<`string`, `string`\>[]

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`input`](../interfaces/AIPromptSettings.md#input)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:58](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L58)

***

### modelPattern?

> `optional` **modelPattern**: `AIModelNameRules` \| `object`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`modelPattern`](../interfaces/AIPromptSettings.md#modelpattern)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:46](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L46)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### output?

> `optional` **output**: `any`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`output`](../interfaces/AIPromptSettings.md#output)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:59](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L59)

***

### parameters?

> `optional` **parameters**: `Record`\<`string`, `any`\>

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`parameters`](../interfaces/AIPromptSettings.md#parameters)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:53](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L53)

***

### priority?

> `optional` **priority**: `number`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`priority`](../interfaces/AIPromptSettings.md#priority)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:57](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L57)

***

### prompt?

> `optional` **prompt**: `DefaultPrompt`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`prompt`](../interfaces/AIPromptSettings.md#prompt)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:50](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L50)

***

### tag?

> `optional` **tag**: `string`[]

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`tag`](../interfaces/AIPromptSettings.md#tag)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:60](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L60)

***

### template

> **template**: `string`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`template`](../interfaces/AIPromptSettings.md#template)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:42](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L42)

***

### templateFormat?

> `optional` **templateFormat**: `string`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`templateFormat`](../interfaces/AIPromptSettings.md#templateformat)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:48](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L48)

***

### type

> **type**: [`AIPromptType`](../type-aliases/AIPromptType.md)

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`type`](../interfaces/AIPromptSettings.md#type)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:43](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L43)

***

### version?

> `optional` **version**: `object`

#### Index Signature

 \[`ver`: `string`\]: `DefaultPrompt`

#### Inherited from

[`AIPromptSettings`](../interfaces/AIPromptSettings.md).[`version`](../interfaces/AIPromptSettings.md#version)

#### Defined in

[packages/ai-tool-prompt/src/prompt-settings.ts:51](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt-settings.ts#L51)

## Methods

### assign()

> **assign**(`src`, `options`?): `this`

Assign the values from the src object.

#### Parameters

• **src**: `any`

the source object

• **options?**: `IMergeOptions`

#### Returns

`this`

this object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign a property of src to this object.

#### Parameters

• **src**: `any`

the src object

• **name**: `string`

the property name to assign

• **value**: `any`

the property value to assign

• **attrs?**: `any`

the attributes object

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign the property value from the src to destination object.

#### Parameters

• **dest**: `any`

The destination object

• **src**: `any`

The src object

• **name**: `string`

The property name

• **value**: `any`

The property value

• **attrs?**: `any`

The attributes object of the property

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Assign this attributes to the dest object

#### Parameters

• **dest?**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

***

### clone()

> **clone**(`options`?): `any`

Create a new object with the same values of attributes.

#### Parameters

• **options?**: `IMergeOptions`

#### Returns

`any`

the new object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Create and assign the values to the destination object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the new dest object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

• **aProperties**: `SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Export attributes to the dest json object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IExportOptions`

#### Returns

`any`

the dest object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:140

***

### importFromFile()

> **importFromFile**(`filepath`): `void`

#### Parameters

• **filepath**: `string`

#### Returns

`void`

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:198](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt.ts#L198)

***

### initialize()

> **initialize**(`src`?): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

• **src?**: `any`

#### Returns

`this`

this object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

***

### isFitForLLM()

> **isFitForLLM**(`modelName`): `undefined` \| `string` \| `string`[]

Determines the fit result for the specified LLM model name with respect to this AIPrompt.

The fit result can be one of the following:
- `'@'`: The default version, indicating the good fit.
- `string`: A specific version or identifier associated with a good fit.
- `undefined`: No fit or compatibility found.

#### Parameters

• **modelName**: `string`

The name of the LLM model to check for compatibility.

#### Returns

`undefined` \| `string` \| `string`[]

The fit result(s) for the given LLM model, representing its compatibility or suitability with this AIPrompt.

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:225](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt.ts#L225)

***

### isLocked()

> **isLocked**(`template`?): `boolean` \| `""`

Checks whether the provided string or the current template (if not provided) is locked.

#### Parameters

• **template?**: `string`

The template to check for lock status. If not provided, uses the current template.

#### Returns

`boolean` \| `""`

`true` if the template is locked, `false` otherwise.

#### Defined in

[packages/ai-tool-prompt/src/prompt.ts:209](https://github.com/isdk/ai-tool-prompt.js/blob/0233e5c9813084375813f34230e8747b56fe8088/src/prompt.ts#L209)

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

• **v**: `Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:146

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Check the src object whether “equals” this object.

#### Parameters

• **src**: `any`

The source object

• **options?**: `IMergeOptions`

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Merge this attributes to dest object.

#### Parameters

• **dest**: `any`

The destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:131

***

### toObject()

> **toObject**(`options`?): `any`

Convert the attributes to the json object

#### Parameters

• **options?**: `any`

#### Returns

`any`

the json object.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:134

***

### assign()

#### assign(target, source)

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source**: `U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

#### assign(target, source1, source2)

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

#### assign(target, source1, source2, source3)

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

• **source3**: `W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

#### assign(target, sources)

> `static` **assign**(`target`, ...`sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

• **target**: `object`

The target object to copy to.

• ...**sources**: `any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

***

### create()

#### create(o)

> `static` **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:188

#### create(o, properties)

> `static` **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null

• **properties**: `PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:195

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

• **aTarget**: `any`

• **aProperties**: `PropDescriptors`

• **recreate?**: `boolean`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

• **p**: `PropertyKey`

The property name.

• **attributes**: `PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:203

***

### entries()

#### entries(o)

> `static` **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `T`][]

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

#### entries(o)

> `static` **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `any`][]

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

***

### freeze()

#### freeze(f)

> `static` **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

• **f**: `T`

Object on which to lock the attributes.

##### Returns

`T`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:222

#### freeze(o)

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:228

#### freeze(o)

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:234

***

### fromEntries()

#### fromEntries(entries)

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

• **entries**: `Iterable`\<readonly [`PropertyKey`, `T`], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

#### fromEntries(entries)

> `static` **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

##### Parameters

• **entries**: `Iterable`\<readonly `any`[], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

• **o**: `any`

Object that contains the property.

• **p**: `PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:175

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

• **o**: `any`

Object that contains the own properties.

#### Returns

`string`[]

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:182

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

• **o**: `any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

• **o**: `any`

The object that references the prototype.

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:167

***

### hasOwn()

> `static` **hasOwn**(`o`, `v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **o**: `object`

An object.

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

• **value1**: `any`

The first value.

• **value2**: `any`

The second value.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:258

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:252

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:246

***

### keys()

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**: `object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:264

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object to make non-extensible.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:240

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to lock the attributes.

#### Returns

`T`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

• **o**: `any`

The object to change its prototype.

• **proto**: `null` \| `object`

The value of the new prototype or null.

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### values()

#### values(o)

> `static` **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`T`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

#### values(o)

> `static` **values**(`o`): `any`[]

Returns an array of values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
