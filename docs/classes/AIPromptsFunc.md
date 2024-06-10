[@isdk/ai-tool-prompt](../README.md) / [Exports](../modules.md) / AIPromptsFunc

# Class: AIPromptsFunc

## Hierarchy

- `KVSqliteResFunc`\<`AIPromptsFuncParams`\>

  ↳ **`AIPromptsFunc`**

## Table of contents

### Constructors

- [constructor](AIPromptsFunc.md#constructor)

### Properties

- [$attributes](AIPromptsFunc.md#$attributes)
- [action](AIPromptsFunc.md#action)
- [allowExportFunc](AIPromptsFunc.md#allowexportfunc)
- [apiRoot](AIPromptsFunc.md#apiroot)
- [constructor](AIPromptsFunc.md#constructor-1)
- [db](AIPromptsFunc.md#db)
- [dbPath](AIPromptsFunc.md#dbpath)
- [defaultOptions](AIPromptsFunc.md#defaultoptions)
- [fetchOptions](AIPromptsFunc.md#fetchoptions)
- [initDir](AIPromptsFunc.md#initdir)
- [methods](AIPromptsFunc.md#methods)
- [name](AIPromptsFunc.md#name)
- [nonExported1stChar](AIPromptsFunc.md#nonexported1stchar)
- [params](AIPromptsFunc.md#params)
- [result](AIPromptsFunc.md#result)
- [scope](AIPromptsFunc.md#scope)
- [setup](AIPromptsFunc.md#setup)
- [stream](AIPromptsFunc.md#stream)
- [tags](AIPromptsFunc.md#tags)
- [dataPath](AIPromptsFunc.md#datapath)
- [items](AIPromptsFunc.md#items)

### Accessors

- [apiRoot](AIPromptsFunc.md#apiroot-1)

### Methods

- [$count](AIPromptsFunc.md#$count)
- [$getDefaultPrompt](AIPromptsFunc.md#$getdefaultprompt)
- [$getParameters](AIPromptsFunc.md#$getparameters)
- [$getPrompt](AIPromptsFunc.md#$getprompt)
- [$search](AIPromptsFunc.md#$search)
- [$searchEx](AIPromptsFunc.md#$searchex)
- [\_getPrompt](AIPromptsFunc.md#_getprompt)
- [arr2ObjParams](AIPromptsFunc.md#arr2objparams)
- [assign](AIPromptsFunc.md#assign)
- [assignProperty](AIPromptsFunc.md#assignproperty)
- [assignPropertyTo](AIPromptsFunc.md#assignpropertyto)
- [assignTo](AIPromptsFunc.md#assignto)
- [cast](AIPromptsFunc.md#cast)
- [clone](AIPromptsFunc.md#clone)
- [cloneTo](AIPromptsFunc.md#cloneto)
- [defineProperties](AIPromptsFunc.md#defineproperties)
- [delete](AIPromptsFunc.md#delete)
- [exportTo](AIPromptsFunc.md#exportto)
- [func](AIPromptsFunc.md#func)
- [get](AIPromptsFunc.md#get)
- [getDocsFromDir](AIPromptsFunc.md#getdocsfromdir)
- [getFunc](AIPromptsFunc.md#getfunc)
- [getFuncWithPos](AIPromptsFunc.md#getfuncwithpos)
- [getMethodFromParams](AIPromptsFunc.md#getmethodfromparams)
- [getProperties](AIPromptsFunc.md#getproperties)
- [hasOwnProperty](AIPromptsFunc.md#hasownproperty)
- [initDB](AIPromptsFunc.md#initdb)
- [initialize](AIPromptsFunc.md#initialize)
- [intDBFromDir](AIPromptsFunc.md#intdbfromdir)
- [isPrototypeOf](AIPromptsFunc.md#isprototypeof)
- [isSame](AIPromptsFunc.md#issame)
- [isStream](AIPromptsFunc.md#isstream)
- [list](AIPromptsFunc.md#list)
- [mergeTo](AIPromptsFunc.md#mergeto)
- [obj2ArrParams](AIPromptsFunc.md#obj2arrparams)
- [post](AIPromptsFunc.md#post)
- [propertyIsEnumerable](AIPromptsFunc.md#propertyisenumerable)
- [put](AIPromptsFunc.md#put)
- [register](AIPromptsFunc.md#register)
- [run](AIPromptsFunc.md#run)
- [runAs](AIPromptsFunc.md#runas)
- [runAsSync](AIPromptsFunc.md#runassync)
- [runSync](AIPromptsFunc.md#runsync)
- [runWithPos](AIPromptsFunc.md#runwithpos)
- [runWithPosAs](AIPromptsFunc.md#runwithposas)
- [runWithPosAsSync](AIPromptsFunc.md#runwithposassync)
- [runWithPosSync](AIPromptsFunc.md#runwithpossync)
- [toJSON](AIPromptsFunc.md#tojson)
- [toLocaleString](AIPromptsFunc.md#tolocalestring)
- [toObject](AIPromptsFunc.md#toobject)
- [toString](AIPromptsFunc.md#tostring)
- [unregister](AIPromptsFunc.md#unregister)
- [updateDBFromDir](AIPromptsFunc.md#updatedbfromdir)
- [valueOf](AIPromptsFunc.md#valueof)
- [assign](AIPromptsFunc.md#assign-1)
- [create](AIPromptsFunc.md#create)
- [defineProperties](AIPromptsFunc.md#defineproperties-1)
- [defineProperty](AIPromptsFunc.md#defineproperty)
- [entries](AIPromptsFunc.md#entries)
- [freeze](AIPromptsFunc.md#freeze)
- [fromEntries](AIPromptsFunc.md#fromentries)
- [get](AIPromptsFunc.md#get-1)
- [getAllByTag](AIPromptsFunc.md#getallbytag)
- [getByTag](AIPromptsFunc.md#getbytag)
- [getFunc](AIPromptsFunc.md#getfunc-1)
- [getFuncWithPos](AIPromptsFunc.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](AIPromptsFunc.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](AIPromptsFunc.md#getownpropertydescriptors)
- [getOwnPropertyNames](AIPromptsFunc.md#getownpropertynames)
- [getOwnPropertySymbols](AIPromptsFunc.md#getownpropertysymbols)
- [getProperties](AIPromptsFunc.md#getproperties-1)
- [getPrototypeOf](AIPromptsFunc.md#getprototypeof)
- [hasOwn](AIPromptsFunc.md#hasown)
- [is](AIPromptsFunc.md#is)
- [isExtensible](AIPromptsFunc.md#isextensible)
- [isFrozen](AIPromptsFunc.md#isfrozen)
- [isSealed](AIPromptsFunc.md#issealed)
- [keys](AIPromptsFunc.md#keys)
- [list](AIPromptsFunc.md#list-1)
- [preventExtensions](AIPromptsFunc.md#preventextensions)
- [register](AIPromptsFunc.md#register-1)
- [run](AIPromptsFunc.md#run-1)
- [runSync](AIPromptsFunc.md#runsync-1)
- [runWithPos](AIPromptsFunc.md#runwithpos-1)
- [runWithPosSync](AIPromptsFunc.md#runwithpossync-1)
- [seal](AIPromptsFunc.md#seal)
- [setApiRoot](AIPromptsFunc.md#setapiroot)
- [setPrototypeOf](AIPromptsFunc.md#setprototypeof)
- [toJSON](AIPromptsFunc.md#tojson-1)
- [unregister](AIPromptsFunc.md#unregister-1)
- [values](AIPromptsFunc.md#values)

## Constructors

### constructor

• **new AIPromptsFunc**(`name`, `options?`): [`AIPromptsFunc`](AIPromptsFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `FuncItem` |
| `options?` | `any` |

#### Returns

[`AIPromptsFunc`](AIPromptsFunc.md)

#### Inherited from

KVSqliteResFunc\<AIPromptsFuncParams\>.constructor

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:165

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

KVSqliteResFunc.$attributes

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"get"`` \| ``"list"`` \| ``"put"`` \| ``"post"`` \| ``"delete"`` \| ``"patch"`` \| ``"res"``

#### Inherited from

KVSqliteResFunc.action

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:550

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

KVSqliteResFunc.allowExportFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:396

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

KVSqliteResFunc.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:130

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

KVSqliteResFunc.constructor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### db

• **db**: `KVSqlite`

#### Inherited from

KVSqliteResFunc.db

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:164

___

### dbPath

• **dbPath**: `undefined` \| `string`

#### Inherited from

KVSqliteResFunc.dbPath

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:162

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Inherited from

KVSqliteResFunc.defaultOptions

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

KVSqliteResFunc.fetchOptions

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:132

___

### initDir

• **initDir**: `undefined` \| `string`

#### Inherited from

KVSqliteResFunc.initDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:163

___

### methods

• **methods**: `string`[]

#### Inherited from

KVSqliteResFunc.methods

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:542

___

### name

• `Optional` **name**: `string`

#### Inherited from

KVSqliteResFunc.name

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:22

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

KVSqliteResFunc.nonExported1stChar

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `FuncParams`

#### Inherited from

KVSqliteResFunc.params

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:551

___

### result

• `Optional` **result**: `string`

#### Inherited from

KVSqliteResFunc.result

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:24

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

KVSqliteResFunc.scope

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:25

___

### setup

• `Optional` **setup**: (`this`: `ToolFunc`, `options?`: `FuncItem`) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ToolFunc` |
| `options?` | `FuncItem` |

##### Returns

`void`

#### Inherited from

KVSqliteResFunc.setup

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:27

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

KVSqliteResFunc.stream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:133

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

KVSqliteResFunc.tags

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:26

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

KVSqliteResFunc.dataPath

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:43

___

### items

▪ `Static` **items**: `Funcs`

#### Inherited from

KVSqliteResFunc.items

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:42

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

KVSqliteResFunc.apiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:403

## Methods

### $count

▸ **$count**(`options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`number`

#### Inherited from

KVSqliteResFunc.$count

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:178

___

### $getDefaultPrompt

▸ **$getDefaultPrompt**(`type?`): [`AIPromptResult`](../interfaces/AIPromptResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |

#### Returns

[`AIPromptResult`](../interfaces/AIPromptResult.md)

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:70](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompts.ts#L70)

___

### $getParameters

▸ **$getParameters**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AIPromptsFuncParams` |

#### Returns

`any`

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:110](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompts.ts#L110)

___

### $getPrompt

▸ **$getPrompt**(`«destructured»`): ``false`` \| [`AIPromptResult`](../interfaces/AIPromptResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AIPromptsFuncParams` |

#### Returns

``false`` \| [`AIPromptResult`](../interfaces/AIPromptResult.md)

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:102](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompts.ts#L102)

___

### $search

▸ **$search**(`options?`): `AIPromptsFuncParams`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`AIPromptsFuncParams`[]

#### Inherited from

KVSqliteResFunc.$search

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:177

___

### $searchEx

▸ **$searchEx**(`options?`): `AIPromptsFuncParams`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`AIPromptsFuncParams`[]

#### Inherited from

KVSqliteResFunc.$searchEx

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:176

___

### \_getPrompt

▸ **_getPrompt**(`modelName`, `type?`): ``false`` \| [`AIPromptResult`](../interfaces/AIPromptResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelName` | `string` |
| `type?` | [`AIPromptType`](../modules.md#aiprompttype) |

#### Returns

``false`` \| [`AIPromptResult`](../interfaces/AIPromptResult.md)

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:32](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompts.ts#L32)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

KVSqliteResFunc.arr2ObjParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:61

___

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assignProperty

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

#### Inherited from

KVSqliteResFunc.assignPropertyTo

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

#### Inherited from

KVSqliteResFunc.assignTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

___

### cast

▸ **cast**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.cast

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:170

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

#### Inherited from

KVSqliteResFunc.clone

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

#### Inherited from

KVSqliteResFunc.cloneTo

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

#### Inherited from

KVSqliteResFunc.defineProperties

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): `SqliteRunResult` \| `SqliteRunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[]

#### Inherited from

KVSqliteResFunc.delete

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:175

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

#### Inherited from

KVSqliteResFunc.exportTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.func

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:555

___

### get

▸ **get**(`params`): `AIPromptsFuncParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `KVSqliteResFuncParams` |

#### Returns

`AIPromptsFuncParams`

#### Overrides

KVSqliteResFunc.get

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:59](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompts.ts#L59)

___

### getDocsFromDir

▸ **getDocsFromDir**(`dir`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`any`[]

#### Inherited from

KVSqliteResFunc.getDocsFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:168

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.getFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:67

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:72

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ResServerFuncParams` |

#### Returns

`undefined` \| `string`

#### Inherited from

KVSqliteResFunc.getMethodFromParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:554

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

KVSqliteResFunc.getProperties

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

#### Inherited from

KVSqliteResFunc.hasOwnProperty

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initDB

▸ **initDB**(): `void`

#### Returns

`void`

#### Overrides

KVSqliteResFunc.initDB

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:25](https://github.com/isdk/ai-tool-prompt.js/blob/213909c591a849ba0cb7fcdd1e90694a0d79e970/src/prompts.ts#L25)

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

#### Inherited from

KVSqliteResFunc.initialize

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

___

### intDBFromDir

▸ **intDBFromDir**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.intDBFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:167

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

#### Inherited from

KVSqliteResFunc.isPrototypeOf

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

#### Inherited from

KVSqliteResFunc.isSame

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ServerFuncParams` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

KVSqliteResFunc.isStream

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:408

___

### list

▸ **list**(`options?`): `AIPromptsFuncParams`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KVSqliteResFuncParams` |

#### Returns

`AIPromptsFuncParams`[]

#### Inherited from

KVSqliteResFunc.list

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:171

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

#### Inherited from

KVSqliteResFunc.mergeTo

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Inherited from

KVSqliteResFunc.obj2ArrParams

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:62

___

### post

▸ **post**(`model`): `SqliteRunResult` \| `SqliteRunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[]

#### Inherited from

KVSqliteResFunc.post

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:174

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

#### Inherited from

KVSqliteResFunc.propertyIsEnumerable

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`model`): `SqliteRunResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult`

#### Inherited from

KVSqliteResFunc.put

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:173

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:59

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

KVSqliteResFunc.run

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:64

___

### runAs

▸ **runAs**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

KVSqliteResFunc.runAs

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:65

___

### runAsSync

▸ **runAsSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.runAsSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:66

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.runSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:63

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

KVSqliteResFunc.runWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:70

___

### runWithPosAs

▸ **runWithPosAs**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

KVSqliteResFunc.runWithPosAs

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:71

___

### runWithPosAsSync

▸ **runWithPosAsSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.runWithPosAsSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:69

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:68

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.toJSON

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

KVSqliteResFunc.toLocaleString

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

#### Inherited from

KVSqliteResFunc.toObject

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

KVSqliteResFunc.toString

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:60

___

### updateDBFromDir

▸ **updateDBFromDir**(`dir?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir?` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.updateDBFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:169

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

KVSqliteResFunc.valueOf

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.assign

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

#### Inherited from

KVSqliteResFunc.create

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

#### Inherited from

KVSqliteResFunc.create

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

#### Inherited from

KVSqliteResFunc.defineProperties

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

#### Inherited from

KVSqliteResFunc.defineProperty

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

#### Inherited from

KVSqliteResFunc.entries

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

#### Inherited from

KVSqliteResFunc.entries

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

#### Inherited from

KVSqliteResFunc.freeze

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

#### Inherited from

KVSqliteResFunc.freeze

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

#### Inherited from

KVSqliteResFunc.freeze

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

#### Inherited from

KVSqliteResFunc.fromEntries

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

#### Inherited from

KVSqliteResFunc.fromEntries

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### get

▸ **get**(`name`): `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`ToolFunc`

#### Inherited from

KVSqliteResFunc.get

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:44

___

### getAllByTag

▸ **getAllByTag**(`tagName`): `ToolFunc`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`ToolFunc`[]

#### Inherited from

KVSqliteResFunc.getAllByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:47

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.getByTag

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:46

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.getFunc

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:50

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.getFuncWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:53

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

#### Inherited from

KVSqliteResFunc.getOwnPropertyDescriptor

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

#### Inherited from

KVSqliteResFunc.getOwnPropertyDescriptors

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

#### Inherited from

KVSqliteResFunc.getOwnPropertyNames

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

#### Inherited from

KVSqliteResFunc.getOwnPropertySymbols

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

KVSqliteResFunc.getProperties

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

#### Inherited from

KVSqliteResFunc.getPrototypeOf

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

#### Inherited from

KVSqliteResFunc.hasOwn

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

#### Inherited from

KVSqliteResFunc.is

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

#### Inherited from

KVSqliteResFunc.isExtensible

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

#### Inherited from

KVSqliteResFunc.isFrozen

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

#### Inherited from

KVSqliteResFunc.isSealed

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

#### Inherited from

KVSqliteResFunc.keys

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

#### Inherited from

KVSqliteResFunc.keys

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): `Funcs`

#### Returns

`Funcs`

#### Inherited from

KVSqliteResFunc.list

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:45

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

#### Inherited from

KVSqliteResFunc.preventExtensions

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### register

▸ **register**(`name`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:54

▸ **register**(`func`, `options`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:55

▸ **register**(`name`, `options?`): `boolean` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| `ToolFunc` \| `FuncItem` |
| `options?` | `FuncItem` |

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.register

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:56

___

### run

▸ **run**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

KVSqliteResFunc.run

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:48

___

### runSync

▸ **runSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.runSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:49

___

### runWithPos

▸ **runWithPos**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

KVSqliteResFunc.runWithPos

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:51

___

### runWithPosSync

▸ **runWithPosSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.runWithPosSync

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:52

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

#### Inherited from

KVSqliteResFunc.seal

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setApiRoot

▸ **setApiRoot**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.setApiRoot

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:404

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

#### Inherited from

KVSqliteResFunc.setPrototypeOf

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

KVSqliteResFunc.toJSON

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:405

___

### unregister

▸ **unregister**(`name`): `undefined` \| `ToolFunc`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.unregister

#### Defined in

packages/ai-tool/dist/index-D4KjfAKl.d.ts:57

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

#### Inherited from

KVSqliteResFunc.values

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

#### Inherited from

KVSqliteResFunc.values

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
