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
- [initingData](AIPromptsFunc.md#initingdata)
- [isApi](AIPromptsFunc.md#isapi)
- [methods](AIPromptsFunc.md#methods)
- [name](AIPromptsFunc.md#name)
- [nonExported1stChar](AIPromptsFunc.md#nonexported1stchar)
- [params](AIPromptsFunc.md#params)
- [result](AIPromptsFunc.md#result)
- [scope](AIPromptsFunc.md#scope)
- [setup](AIPromptsFunc.md#setup)
- [stream](AIPromptsFunc.md#stream)
- [tags](AIPromptsFunc.md#tags)
- [SpecialRpcMethodNames](AIPromptsFunc.md#specialrpcmethodnames)
- [dataPath](AIPromptsFunc.md#datapath)
- [items](AIPromptsFunc.md#items)

### Accessors

- [SpecialRpcMethodNames](AIPromptsFunc.md#specialrpcmethodnames-1)
- [apiRoot](AIPromptsFunc.md#apiroot-1)

### Methods

- [$count](AIPromptsFunc.md#$count)
- [$createCollection](AIPromptsFunc.md#$createcollection)
- [$deleteCollection](AIPromptsFunc.md#$deletecollection)
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
- [castParams](AIPromptsFunc.md#castparams)
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
- [hasAsyncFeature](AIPromptsFunc.md#hasasyncfeature)
- [hasOwnProperty](AIPromptsFunc.md#hasownproperty)
- [initDB](AIPromptsFunc.md#initdb)
- [initData](AIPromptsFunc.md#initdata)
- [initDataFromDir](AIPromptsFunc.md#initdatafromdir)
- [initRpcMethods](AIPromptsFunc.md#initrpcmethods)
- [initialize](AIPromptsFunc.md#initialize)
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
- [updateDataFromDir](AIPromptsFunc.md#updatedatafromdir)
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
- [hasAsyncFeature](AIPromptsFunc.md#hasasyncfeature-1)
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

packages/ai-tool-sqlite/dist/index.d.ts:56

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

KVSqliteResFunc.$attributes

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"get"`` \| ``"list"`` \| ``"put"`` \| ``"post"`` \| ``"delete"`` \| ``"patch"`` \| ``"res"``

#### Inherited from

KVSqliteResFunc.action

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:579

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

KVSqliteResFunc.allowExportFunc

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:424

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

KVSqliteResFunc.apiRoot

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:160

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

packages/ai-tool-sqlite/dist/index.d.ts:54

___

### dbPath

• **dbPath**: `undefined` \| `string`

#### Inherited from

KVSqliteResFunc.dbPath

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:52

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

KVSqliteResFunc.fetchOptions

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:162

___

### initDir

• **initDir**: `undefined` \| `string`

#### Inherited from

KVSqliteResFunc.initDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:53

___

### initingData

• **initingData**: `undefined` \| `boolean`

#### Inherited from

KVSqliteResFunc.initingData

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:55

___

### isApi

• `Optional` **isApi**: `boolean`

#### Inherited from

KVSqliteResFunc.isApi

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:42

___

### methods

• **methods**: `string`[]

#### Inherited from

KVSqliteResFunc.methods

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:552

___

### name

• `Optional` **name**: `string`

#### Inherited from

KVSqliteResFunc.name

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:36

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

KVSqliteResFunc.nonExported1stChar

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: `FuncParams`

#### Inherited from

KVSqliteResFunc.params

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:580

___

### result

• `Optional` **result**: `string`

#### Inherited from

KVSqliteResFunc.result

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:38

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

KVSqliteResFunc.scope

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:39

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:41

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

KVSqliteResFunc.stream

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:43

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

KVSqliteResFunc.tags

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:40

___

### SpecialRpcMethodNames

▪ `Static` **SpecialRpcMethodNames**: `any`

#### Inherited from

KVSqliteResFunc.SpecialRpcMethodNames

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:578

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

KVSqliteResFunc.dataPath

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:64

___

### items

▪ `Static` **items**: `Funcs`

#### Inherited from

KVSqliteResFunc.items

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:63

## Accessors

### SpecialRpcMethodNames

• `get` **SpecialRpcMethodNames**(): `any`

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.SpecialRpcMethodNames

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:557

___

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

KVSqliteResFunc.apiRoot

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:431

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

packages/ai-tool-sqlite/dist/index.d.ts:69

___

### $createCollection

▸ **$createCollection**(`«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `KVSqliteResFuncParams` |

#### Returns

`boolean`

#### Inherited from

KVSqliteResFunc.$createCollection

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:70

___

### $deleteCollection

▸ **$deleteCollection**(`«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `KVSqliteResFuncParams` |

#### Returns

`boolean`

#### Inherited from

KVSqliteResFunc.$deleteCollection

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:71

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

[packages/ai-tool-prompt/src/prompts.ts:74](https://github.com/isdk/ai-tool-prompt.js/blob/104d3fa1fa30b749734f57be10fd983b25430c9a/src/prompts.ts#L74)

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

[packages/ai-tool-prompt/src/prompts.ts:114](https://github.com/isdk/ai-tool-prompt.js/blob/104d3fa1fa30b749734f57be10fd983b25430c9a/src/prompts.ts#L114)

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

[packages/ai-tool-prompt/src/prompts.ts:106](https://github.com/isdk/ai-tool-prompt.js/blob/104d3fa1fa30b749734f57be10fd983b25430c9a/src/prompts.ts#L106)

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

packages/ai-tool-sqlite/dist/index.d.ts:68

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

packages/ai-tool-sqlite/dist/index.d.ts:67

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

[packages/ai-tool-prompt/src/prompts.ts:36](https://github.com/isdk/ai-tool-prompt.js/blob/104d3fa1fa30b749734f57be10fd983b25430c9a/src/prompts.ts#L36)

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:83

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:106

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:117

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:131

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:191

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

packages/ai-tool-sqlite/dist/index.d.ts:61

___

### castParams

▸ **castParams**(`params`): `RpcMethodsServerFuncParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RpcMethodsServerFuncParams` |

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

KVSqliteResFunc.castParams

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:583

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:155

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:148

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`options`): `SqliteRunResult` \| `SqliteRunResult`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[]

#### Inherited from

KVSqliteResFunc.delete

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:66

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:173

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RpcMethodsServerFuncParams` |

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.func

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:563

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

[packages/ai-tool-prompt/src/prompts.ts:63](https://github.com/isdk/ai-tool-prompt.js/blob/104d3fa1fa30b749734f57be10fd983b25430c9a/src/prompts.ts#L63)

___

### getDocsFromDir

▸ **getDocsFromDir**(`dir`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

KVSqliteResFunc.getDocsFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:59

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:89

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:94

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:582

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AsyncFeatureBits` |

#### Returns

`boolean`

#### Inherited from

KVSqliteResFunc.hasAsyncFeature

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:95

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

▸ **initDB**(`db`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `KVSqlite` |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.initDB

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:49

___

### initData

▸ **initData**(): `void`

#### Returns

`void`

#### Overrides

KVSqliteResFunc.initData

#### Defined in

[packages/ai-tool-prompt/src/prompts.ts:29](https://github.com/isdk/ai-tool-prompt.js/blob/104d3fa1fa30b749734f57be10fd983b25430c9a/src/prompts.ts#L29)

___

### initDataFromDir

▸ **initDataFromDir**(`dir`, `collection?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `collection?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

KVSqliteResFunc.initDataFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:58

___

### initRpcMethods

▸ **initRpcMethods**(`methods?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methods?` | `string`[] |

#### Returns

`void`

#### Inherited from

KVSqliteResFunc.initRpcMethods

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:558

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:139

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

KVSqliteResFunc.isStream

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:96

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

packages/ai-tool-sqlite/dist/index.d.ts:62

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:164

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:84

___

### post

▸ **post**(`model`): `SqliteRunResult` \| `SqliteRunResult`[] \| `Promise`\<`SqliteRunResult` \| `SqliteRunResult`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[] \| `Promise`\<`SqliteRunResult` \| `SqliteRunResult`[]\>

#### Inherited from

KVSqliteResFunc.post

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:65

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

▸ **put**(`model`): `SqliteRunResult` \| `Promise`\<`SqliteRunResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `KVSqliteResFuncParams` |

#### Returns

`SqliteRunResult` \| `Promise`\<`SqliteRunResult`\>

#### Inherited from

KVSqliteResFunc.put

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:64

___

### register

▸ **register**(): `boolean` \| `ToolFunc`

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

KVSqliteResFunc.register

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:81

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:86

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:87

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:88

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:85

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:92

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:93

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:91

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:90

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

KVSqliteResFunc.toJSON

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:182

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:181

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:82

___

### updateDataFromDir

▸ **updateDataFromDir**(`dir?`, `collection?`): `Promise`\<`undefined` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir?` | `string` |
| `collection?` | `string` |

#### Returns

`Promise`\<`undefined` \| `number`\>

#### Inherited from

KVSqliteResFunc.updateDataFromDir

#### Defined in

packages/ai-tool-sqlite/dist/index.d.ts:60

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:11

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:65

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:68

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:67

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:72

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:75

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

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:10

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

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `AsyncFeatureBits` |

#### Returns

`boolean`

#### Inherited from

KVSqliteResFunc.hasAsyncFeature

#### Defined in

packages/ai-tool/dist/index-DvpywQaE.d.ts:69

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:66

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:76

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:77

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:78

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:70

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:71

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:73

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:74

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:432

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:433

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

packages/ai-tool/dist/index-DvpywQaE.d.ts:79

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
