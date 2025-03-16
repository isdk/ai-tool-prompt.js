[**@isdk/ai-tool-prompt**](../README.md)

***

[@isdk/ai-tool-prompt](../globals.md) / AIPromptsFunc

# Class: AIPromptsFunc

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:21](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L21)

## Extends

- `KVSqliteResFunc`\<`AIPromptsFuncParams`\>

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new AIPromptsFunc()

> **new AIPromptsFunc**(`name`, `options`?): [`AIPromptsFunc`](AIPromptsFunc.md)

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:56

#### Parameters

##### name

`string` | `Function` | `FuncItem`

##### options?

`any`

#### Returns

[`AIPromptsFunc`](AIPromptsFunc.md)

#### Inherited from

`KVSqliteResFunc<AIPromptsFuncParams>.constructor`

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

#### Inherited from

`KVSqliteResFunc.$attributes`

***

### action

> **action**: `"get"` \| `"list"` \| `"put"` \| `"post"` \| `"delete"` \| `"patch"` \| `"res"`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:842

#### Inherited from

`KVSqliteResFunc.action`

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:686

#### Inherited from

`KVSqliteResFunc.allowExportFunc`

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:149

#### Inherited from

`KVSqliteResFunc.apiRoot`

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`KVSqliteResFunc.constructor`

***

### db

> **db**: `KVSqlite`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:54

#### Inherited from

`KVSqliteResFunc.db`

***

### dbPath

> **dbPath**: `undefined` \| `string`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:52

#### Inherited from

`KVSqliteResFunc.dbPath`

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Inherited from

`KVSqliteResFunc.defaultOptions`

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:151

#### Inherited from

`KVSqliteResFunc.fetchOptions`

***

### initDir

> **initDir**: `undefined` \| `string`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:53

#### Inherited from

`KVSqliteResFunc.initDir`

***

### initingData

> **initingData**: `undefined` \| `boolean`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:55

#### Inherited from

`KVSqliteResFunc.initingData`

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:31

#### Inherited from

`KVSqliteResFunc.isApi`

***

### methods

> **methods**: `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:815

#### Inherited from

`KVSqliteResFunc.methods`

***

### name?

> `optional` **name**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:25

#### Inherited from

`KVSqliteResFunc.name`

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

#### Inherited from

`KVSqliteResFunc.nonExported1stChar`

***

### params

> **params**: `FuncParams`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:843

#### Inherited from

`KVSqliteResFunc.params`

***

### result?

> `optional` **result**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:27

#### Inherited from

`KVSqliteResFunc.result`

***

### scope?

> `optional` **scope**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:28

#### Inherited from

`KVSqliteResFunc.scope`

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:30

#### Parameters

##### this

`ToolFunc`

##### options?

`FuncItem`

#### Returns

`void`

#### Inherited from

`KVSqliteResFunc.setup`

***

### stream?

> `optional` **stream**: `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:32

#### Inherited from

`KVSqliteResFunc.stream`

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:29

#### Inherited from

`KVSqliteResFunc.tags`

***

### dataPath

> `static` **dataPath**: `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:53

#### Inherited from

`KVSqliteResFunc.dataPath`

***

### items

> `static` **items**: `Funcs`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:52

#### Inherited from

`KVSqliteResFunc.items`

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:841

#### Inherited from

`KVSqliteResFunc.SpecialRpcMethodNames`

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:820

##### Returns

`any`

#### Inherited from

`KVSqliteResFunc.SpecialRpcMethodNames`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:693

##### Returns

`undefined` \| `string`

#### Inherited from

`KVSqliteResFunc.apiRoot`

## Methods

### \_getPrompt()

> **\_getPrompt**(`modelName`, `type`?, `size`?): `Promise`\<`false` \| \{ `id`: `string`; `prompt`: [`AIPromptSettings`](../interfaces/AIPromptSettings.md); `version`: `string` \| `string`[]; \}\>

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:30](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L30)

#### Parameters

##### modelName

`string`

##### type?

[`AIPromptType`](../type-aliases/AIPromptType.md)

##### size?

`string` | `number`

#### Returns

`Promise`\<`false` \| \{ `id`: `string`; `prompt`: [`AIPromptSettings`](../interfaces/AIPromptSettings.md); `version`: `string` \| `string`[]; \}\>

***

### $count()

> **$count**(`options`?): `number`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:69

#### Parameters

##### options?

`KVSqliteResFuncParams`

#### Returns

`number`

#### Inherited from

`KVSqliteResFunc.$count`

***

### $createCollection()

> **$createCollection**(`__namedParameters`): `boolean`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:70

#### Parameters

##### \_\_namedParameters

`KVSqliteResFuncParams`

#### Returns

`boolean`

#### Inherited from

`KVSqliteResFunc.$createCollection`

***

### $deleteCollection()

> **$deleteCollection**(`__namedParameters`): `boolean`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:71

#### Parameters

##### \_\_namedParameters

`KVSqliteResFuncParams`

#### Returns

`boolean`

#### Inherited from

`KVSqliteResFunc.$deleteCollection`

***

### $getDefaultPrompt()

> **$getDefaultPrompt**(`type`?): [`AIPromptResult`](../interfaces/AIPromptResult.md)

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:50](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L50)

#### Parameters

##### type?

`string`

#### Returns

[`AIPromptResult`](../interfaces/AIPromptResult.md)

***

### $getParameters()

> **$getParameters**(`__namedParameters`): `any`

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:90](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L90)

#### Parameters

##### \_\_namedParameters

`AIPromptsFuncParams`

#### Returns

`any`

***

### $getPrompt()

> **$getPrompt**(`__namedParameters`): `Promise`\<`false` \| \{ `id`: `string`; `prompt`: [`AIPromptSettings`](../interfaces/AIPromptSettings.md); `version`: `string` \| `string`[]; \}\>

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:82](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L82)

#### Parameters

##### \_\_namedParameters

`AIPromptsFuncParams`

#### Returns

`Promise`\<`false` \| \{ `id`: `string`; `prompt`: [`AIPromptSettings`](../interfaces/AIPromptSettings.md); `version`: `string` \| `string`[]; \}\>

***

### $search()

> **$search**(`options`?): `AIPromptsFuncParams`[]

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:68

#### Parameters

##### options?

`KVSqliteResFuncParams`

#### Returns

`AIPromptsFuncParams`[]

#### Inherited from

`KVSqliteResFunc.$search`

***

### $searchEx()

> **$searchEx**(`options`?): `AIPromptsFuncParams`[]

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:67

#### Parameters

##### options?

`KVSqliteResFuncParams`

#### Returns

`AIPromptsFuncParams`[]

#### Inherited from

`KVSqliteResFunc.$searchEx`

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:72

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

#### Inherited from

`KVSqliteResFunc.arr2ObjParams`

***

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

#### Inherited from

`KVSqliteResFunc.assign`

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

#### Inherited from

`KVSqliteResFunc.assignProperty`

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

#### Inherited from

`KVSqliteResFunc.assignPropertyTo`

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

#### Inherited from

`KVSqliteResFunc.assignTo`

***

### cast()

> **cast**(`key`, `value`): `any`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:61

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.cast`

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:846

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

`KVSqliteResFunc.castParams`

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

#### Inherited from

`KVSqliteResFunc.clone`

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

#### Inherited from

`KVSqliteResFunc.cloneTo`

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

#### Inherited from

`KVSqliteResFunc.defineProperties`

***

### delete()

> **delete**(`options`): `SqliteRunResult` \| `SqliteRunResult`[]

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:66

#### Parameters

##### options

`KVSqliteResFuncParams`

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[]

#### Inherited from

`KVSqliteResFunc.delete`

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

#### Inherited from

`KVSqliteResFunc.exportTo`

***

### func()

> **func**(`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:826

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.func`

***

### get()

> **get**(`params`): [`AIPromptSettings`](../interfaces/AIPromptSettings.md)

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:39](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L39)

#### Parameters

##### params

`KVSqliteResFuncParams`

#### Returns

[`AIPromptSettings`](../interfaces/AIPromptSettings.md)

#### Overrides

`KVSqliteResFunc.get`

***

### getDocsFromDir()

> **getDocsFromDir**(`dir`): `Promise`\<`any`[]\>

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:59

#### Parameters

##### dir

`string`

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

`KVSqliteResFunc.getDocsFromDir`

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:78

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.getFunc`

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:83

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.getFuncWithPos`

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:845

#### Parameters

##### params

`ResServerFuncParams`

#### Returns

`undefined` \| `string`

#### Inherited from

`KVSqliteResFunc.getMethodFromParams`

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

`KVSqliteResFunc.getProperties`

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:84

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

#### Inherited from

`KVSqliteResFunc.hasAsyncFeature`

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

#### Inherited from

`KVSqliteResFunc.hasOwnProperty`

***

### initData()

> **initData**(`initDir`?, `collection`?): `Promise`\<`void`\>

Defined in: [packages/ai-tool-prompt/src/prompts-db.ts:23](https://github.com/isdk/ai-tool-prompt.js/blob/70ce94702eed9d85cca3f3ee34932e2e7327d2ba/src/prompts-db.ts#L23)

#### Parameters

##### initDir?

`string`

##### collection?

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

`KVSqliteResFunc.initData`

***

### initDataFromDir()

> **initDataFromDir**(`dir`, `collection`?): `Promise`\<`void`\>

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:58

#### Parameters

##### dir

`string`

##### collection?

`string`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`KVSqliteResFunc.initDataFromDir`

***

### initDB()

> **initDB**(`db`): `void`

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:49

#### Parameters

##### db

`KVSqlite`

#### Returns

`void`

#### Inherited from

`KVSqliteResFunc.initDB`

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

#### Inherited from

`KVSqliteResFunc.initialize`

***

### initRpcMethods()

> **initRpcMethods**(`methods`?): `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:821

#### Parameters

##### methods?

`string`[]

#### Returns

`void`

#### Inherited from

`KVSqliteResFunc.initRpcMethods`

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

#### Inherited from

`KVSqliteResFunc.isPrototypeOf`

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

#### Inherited from

`KVSqliteResFunc.isSame`

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:85

#### Parameters

##### params

`any`

#### Returns

`undefined` \| `boolean`

#### Inherited from

`KVSqliteResFunc.isStream`

***

### list()

> **list**(`options`?): `AIPromptsFuncParams`[]

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:62

#### Parameters

##### options?

`KVSqliteResFuncParams`

#### Returns

`AIPromptsFuncParams`[]

#### Inherited from

`KVSqliteResFunc.list`

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

#### Inherited from

`KVSqliteResFunc.mergeTo`

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:73

#### Parameters

##### params?

`any`

#### Returns

`any`[]

#### Inherited from

`KVSqliteResFunc.obj2ArrParams`

***

### post()

> **post**(`model`): `SqliteRunResult` \| `SqliteRunResult`[] \| `Promise`\<`SqliteRunResult` \| `SqliteRunResult`[]\>

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:65

#### Parameters

##### model

`KVSqliteResFuncParams`

#### Returns

`SqliteRunResult` \| `SqliteRunResult`[] \| `Promise`\<`SqliteRunResult` \| `SqliteRunResult`[]\>

#### Inherited from

`KVSqliteResFunc.post`

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

#### Inherited from

`KVSqliteResFunc.propertyIsEnumerable`

***

### put()

> **put**(`model`): `SqliteRunResult` \| `Promise`\<`SqliteRunResult`\>

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:64

#### Parameters

##### model

`KVSqliteResFuncParams`

#### Returns

`SqliteRunResult` \| `Promise`\<`SqliteRunResult`\>

#### Inherited from

`KVSqliteResFunc.put`

***

### register()

> **register**(): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:70

#### Returns

`boolean` \| `ToolFunc`

#### Inherited from

`KVSqliteResFunc.register`

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:75

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`KVSqliteResFunc.run`

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:76

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`KVSqliteResFunc.runAs`

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:77

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.runAsSync`

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:74

#### Parameters

##### params?

`any`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.runSync`

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:81

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`KVSqliteResFunc.runWithPos`

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:82

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`KVSqliteResFunc.runWithPosAs`

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:80

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.runWithPosAsSync`

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:79

#### Parameters

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.runWithPosSync`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.toJSON`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

`KVSqliteResFunc.toLocaleString`

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

#### Inherited from

`KVSqliteResFunc.toObject`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`KVSqliteResFunc.toString`

***

### unregister()

> **unregister**(): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:71

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.unregister`

***

### updateDataFromDir()

> **updateDataFromDir**(`dir`?, `collection`?): `Promise`\<`undefined` \| `number`\>

Defined in: packages/ai-tool-sqlite/dist/index.d.ts:60

#### Parameters

##### dir?

`string`

##### collection?

`string`

#### Returns

`Promise`\<`undefined` \| `number`\>

#### Inherited from

`KVSqliteResFunc.updateDataFromDir`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

`KVSqliteResFunc.valueOf`

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

##### Inherited from

`KVSqliteResFunc.assign`

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

##### Inherited from

`KVSqliteResFunc.assign`

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

##### Inherited from

`KVSqliteResFunc.assign`

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

##### Inherited from

`KVSqliteResFunc.assign`

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

##### Inherited from

`KVSqliteResFunc.create`

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

##### Inherited from

`KVSqliteResFunc.create`

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

#### Inherited from

`KVSqliteResFunc.defineProperties`

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

#### Inherited from

`KVSqliteResFunc.defineProperty`

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

##### Inherited from

`KVSqliteResFunc.entries`

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

##### Inherited from

`KVSqliteResFunc.entries`

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

##### Inherited from

`KVSqliteResFunc.freeze`

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

##### Inherited from

`KVSqliteResFunc.freeze`

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

##### Inherited from

`KVSqliteResFunc.freeze`

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

##### Inherited from

`KVSqliteResFunc.fromEntries`

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

##### Inherited from

`KVSqliteResFunc.fromEntries`

***

### get()

> `static` **get**(`name`): `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:54

#### Parameters

##### name

`string`

#### Returns

`ToolFunc`

#### Inherited from

`KVSqliteResFunc.get`

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): `ToolFunc`[]

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:57

#### Parameters

##### tagName

`string`

#### Returns

`ToolFunc`[]

#### Inherited from

`KVSqliteResFunc.getAllByTag`

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:56

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

`KVSqliteResFunc.getByTag`

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:61

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.getFunc`

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:64

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.getFuncWithPos`

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

#### Inherited from

`KVSqliteResFunc.getOwnPropertyDescriptor`

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

#### Inherited from

`KVSqliteResFunc.getOwnPropertyDescriptors`

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

#### Inherited from

`KVSqliteResFunc.getOwnPropertyNames`

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

#### Inherited from

`KVSqliteResFunc.getOwnPropertySymbols`

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

`KVSqliteResFunc.getProperties`

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

#### Inherited from

`KVSqliteResFunc.getPrototypeOf`

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:58

#### Parameters

##### feature

`AsyncFeatureBits`

#### Returns

`boolean`

#### Inherited from

`KVSqliteResFunc.hasAsyncFeature`

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

#### Inherited from

`KVSqliteResFunc.hasOwn`

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

#### Inherited from

`KVSqliteResFunc.is`

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

#### Inherited from

`KVSqliteResFunc.isExtensible`

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

#### Inherited from

`KVSqliteResFunc.isFrozen`

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

#### Inherited from

`KVSqliteResFunc.isSealed`

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

##### Inherited from

`KVSqliteResFunc.keys`

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

`KVSqliteResFunc.keys`

***

### list()

> `static` **list**(): `Funcs`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:55

#### Returns

`Funcs`

#### Inherited from

`KVSqliteResFunc.list`

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

#### Inherited from

`KVSqliteResFunc.preventExtensions`

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:65

##### Parameters

###### name

`string`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`KVSqliteResFunc.register`

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:66

##### Parameters

###### func

`Function`

###### options

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`KVSqliteResFunc.register`

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:67

##### Parameters

###### name

`string` | `Function` | `ToolFunc` | `FuncItem`

###### options?

`FuncItem`

##### Returns

`boolean` \| `ToolFunc`

##### Inherited from

`KVSqliteResFunc.register`

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:59

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`KVSqliteResFunc.run`

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:60

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.runSync`

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:62

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

`KVSqliteResFunc.runWithPos`

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:63

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

`KVSqliteResFunc.runWithPosSync`

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

#### Inherited from

`KVSqliteResFunc.seal`

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:694

#### Parameters

##### v

`string`

#### Returns

`void`

#### Inherited from

`KVSqliteResFunc.setApiRoot`

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

#### Inherited from

`KVSqliteResFunc.setPrototypeOf`

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:695

#### Returns

`object`

#### Inherited from

`KVSqliteResFunc.toJSON`

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| `ToolFunc`

Defined in: packages/ai-tool/dist/index-Br-4ZYgE.d.ts:68

#### Parameters

##### name

`string`

#### Returns

`undefined` \| `ToolFunc`

#### Inherited from

`KVSqliteResFunc.unregister`

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

##### Inherited from

`KVSqliteResFunc.values`

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

`KVSqliteResFunc.values`
