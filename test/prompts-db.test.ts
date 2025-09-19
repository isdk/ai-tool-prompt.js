// @vitest-environment node
import { ClientTools, ErrorCode, Funcs, HttpClientToolTransport, HttpServerToolTransport, NotFoundError, ResClientTools, ResServerTools, ToolFunc, sleep } from "@isdk/ai-tool"
import { FuncParams, ServerTools } from '@isdk/ai-tool'
import { findPort } from '@isdk/ai-tool/test/util'

import { AIPromptsFunc, AIPromptsName } from '../src/prompts-db'
import { getVersionPromptSettings } from '../src'

// const dbPath = '.promptsdb'
const dbPath = ':memory:'

describe('Prompts server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  let promptsFunc: AIPromptsFunc
  let server: HttpServerToolTransport

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    promptsFunc = new AIPromptsFunc(AIPromptsName, {dbPath})
    await promptsFunc.initData()
    promptsFunc.register()

    await sleep(10)
    server = new HttpServerToolTransport()
    await server.mount(ResServerTools, '/api')

    const port = await findPort(3000)
    const result = await server.start({port})
    // console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    const clientTransport = new HttpClientToolTransport(apiRoot);
    await clientTransport.mount(ResClientTools)
  })

  afterAll(async () => {
    await server.stop()
    delete (ClientTools as any).items
    delete (ServerTools as any).items
  })

  it('should raise error to get non-exists item', async () => {
    const result = ResClientTools.get(AIPromptsName)
    expect(result).toBeInstanceOf(ResClientTools)
    let err: any
    try {
      const res = await result.get({id: "123"})
    } catch(e) {
      err = e
    }
    expect(err).toBeInstanceOf(NotFoundError)
    expect(err.message).toBe('Could not find 123.')
    expect(err.code).toBe(ErrorCode.NotFound)
    expect(err.data).toStrictEqual({what: "123"})
  })

  it('should list prompts', async () => {
    const result = ResClientTools.get(AIPromptsName)
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.list()
    expect(res.length).toBeGreaterThanOrEqual(14)
    res = await result.list({size: 2})
    expect(res.length).toBe(2)
    res = await result.list({query: 'Llama%'})
    expect(res.length).toBe(2)
    expect(res.map(i=>i._id)).toStrictEqual([ 'Llama-v2', 'Llama-v3' ])
    // expect(result.customMethod).toBeInstanceOf(Function)
    // res = await result.customMethod({id: 2})
    // expect(res).toStrictEqual({name: 'customMethod', id: 2, item: 20})

    // expect(await result.run({a: 10})).toStrictEqual(10)
    // expect(await result.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })
  it('should get default prompt', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    const prompt = await prompts.get({id: 'default'})
    expect(prompt).toHaveProperty('_id', 'default')
  })
  it('should add/del prompt', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    const prompt = {
      _id: 'TestPrompt',
      templateFormat: 'hf',
      type: 'system',
      prompt: {
        system: 'You are a helpful assistant.',
      },
      template: `{%- for message in messages %}
  {%- if loop.first and system and messages[0]['role'] != 'system' %}
  {{- system + '\n'}}
  {%- endif %}
  {{message['role']+': ' + message['content'] + '\n'}}
{%- endfor -%}
{%- if add_generation_prompt -%}assistant: {%- endif -%}`
    }
    let result = await prompts.post({id: prompt._id, val: prompt})
    expect(result).toHaveProperty('changes', 1)
    result = await prompts.get({id: prompt._id})
    expect(result).toMatchObject(prompt)
    result = await prompts.delete({id: prompt._id})
    expect(result).toHaveProperty('changes', 1)
    await expect(prompts.get({id: prompt._id})).rejects.toThrow(NotFoundError)
  })

  it('should get prompt for LLM', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    let result = await prompts.getPrompt({model: 'Llama-2'})
    expect(result).toHaveProperty('prompt')
    expect(result).toHaveProperty('version', '@')
    expect(result.prompt).toHaveProperty('_id', 'Llama-v2')
    result = await prompts.getPrompt({model: 'phi-3-mini-4k-instruct.Q4_0'})
    expect(result).toHaveProperty('prompt')
    expect(result.prompt).toHaveProperty('_id', 'Phi-3')
    // expect(result).toHaveProperty('version', '@')
    // expect(result.prompt).toHaveProperty('_id', 'Llama-v2')
    result = await prompts.getPrompt({model: 's1-32b.Q4_0', type: 'system'})
    expect(result).toHaveProperty('version', 's1')
    expect(result.prompt).toHaveProperty('_id', 'Qwen')
    let promptSettings = getVersionPromptSettings('s1', result.prompt)
    expect(promptSettings).toHaveProperty('shouldThink')
  })

  it('should get prompt by type for LLM', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    const prompt = {
      _id: 'TestPrompt:char',
      templateFormat: 'hf',
      modelPattern: 'Llama-2',
      type: 'char',
      prompt: {
        system: 'You are a helpful assistant.',
      },
      template: `{%- for message in messages %}
  {%- if loop.first and system and messages[0]['role'] != 'system' %}
  {{- system + '\n'}}
  {%- endif %}
  {{message['role']+': ' + message['content'] + '\n'}}
{%- endfor -%}
{%- if add_generation_prompt -%}assistant: {%- endif -%}`
    }
    let result = await prompts.post({id: prompt._id, val: prompt})
    expect(result).toHaveProperty('changes', 1)

    result = await prompts.getPrompt({model: 'Llama-2', type: 'char'})
    expect(result).toHaveProperty('prompt')
    expect(result).toHaveProperty('version', '@')
    expect(result.prompt).toHaveProperty('_id', prompt._id)
    result = await prompts.delete({id: prompt._id})
    expect(result).toHaveProperty('changes', 1)
    await expect(prompts.get({id: prompt._id})).rejects.toThrow(NotFoundError)
  })
  it('should getLLMParameters', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    let result = await prompts.getParameters({id: 'ChatML', model: 'minicpm'})
    expect(result).toStrictEqual({
      temperature: 0.7,
      top_p: 0.7,
    })
    result = await prompts.getParameters({id: 'ChatML', model: 'violet_twilight-7b-chat.Q4_0'})
    expect(result).toStrictEqual({
      temperature: 1.22,
      top_p: 1,
      top_k: 50,
      top_a: 0,
    })
    result = await prompts.getParameters({id: 'ChatML', model: 'nous-hermes-2-yi-34b.Q4_0.gguf'})
    expect(result).toStrictEqual({
      min_p: 0.06,
      repeat_penalty: 1.1,
    })

    result = await prompts.getParameters({id: 'Qwen', model: 'qwen1.5'})
    expect(result).toStrictEqual({
      temperature: 0.01,
      top_p: 0.9,
      stop_words: ['<|im_end|>', '[PAD151645]', '<|endoftext|>'],
    })
  })
  it('should extends prompt', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    const promptRoot = {
      _id: 'TestPrompt:extends:root',
      prompt: {
        system: 'You are a professional assistant.',
        messages: [3]
      },
      extends: 'default'
    }
    let result = await prompts.post({id: promptRoot._id, val: promptRoot})
    expect(result).toHaveProperty('changes', 1)
    const prompt = {
      _id: 'TestPrompt:extends',
      modelPattern: 'my-extends',
      prompt: {
        messages: [6]
      },
      extends: promptRoot._id
    }
    result = await prompts.post({id: prompt._id, val: prompt})
    expect(result).toHaveProperty('changes', 1)

    result = await prompts.getPrompt({model: 'my-extends'})
    expect(result).toHaveProperty('prompt')
    expect(result).toHaveProperty('version', '@')
    expect(result.prompt).toHaveProperty('_id', prompt._id)
    expect(result.prompt).toHaveProperty('prompt')
    expect(result.prompt.prompt).toHaveProperty('system', promptRoot.prompt.system)
    expect(result.prompt).toHaveProperty('template')
    expect(result.prompt.prompt.messages).toStrictEqual([3,6])

    result = await prompts.get({id: 'TestPrompt:extends'})
    expect(result).toHaveProperty('prompt')
    expect(result).toHaveProperty('_id', prompt._id)
    expect(result).toHaveProperty('prompt')
    expect(result.prompt).toHaveProperty('system', promptRoot.prompt.system)
    expect(result).toHaveProperty('template')
    expect(result.prompt.messages).toStrictEqual([3,6])

    result = await prompts.delete({id: prompt._id})
    expect(result).toHaveProperty('changes', 1)
    await expect(prompts.get({id: prompt._id})).rejects.toThrow(NotFoundError)
  })
  it('should set priority prompt', async () => {
    const prompts = ResClientTools.get(AIPromptsName)
    expect(prompts).toBeInstanceOf(ResClientTools)
    const prompt = {
      _id: 'TestPrompt:priority',
      modelPattern: /(?:^|[-_.])(qwen)(?:\d+(?:[.]\d+)?)?(?:$|[-_.])/i.toString(),
      prompt: {
        system: 'You are a professional assistant.',
      },
      priority: 10
    }
    let result = await prompts.post({id: prompt._id, val: prompt})
    expect(result).toHaveProperty('changes', 1)

    result = await prompts.getPrompt({model: 'qwen1.5'})
    const result2 = await promptsFunc.$getPrompt({model: 'qwen1.5'})
    expect(result2).toMatchObject(result)
    expect(result).toHaveProperty('prompt')
    expect(result).toHaveProperty('version', '@')
    expect(result.prompt).toHaveProperty('_id', prompt._id)
    expect(result.prompt).toHaveProperty('prompt')
    expect(result.prompt.prompt).toHaveProperty('system', prompt.prompt.system)

    result = await prompts.delete({id: prompt._id})
    expect(result).toHaveProperty('changes', 1)
    await expect(prompts.get({id: prompt._id})).rejects.toThrow(NotFoundError)

    result = await prompts.getPrompt({model: 'qwen1.5'})
    expect(result).toHaveProperty('prompt')
    expect(result.prompt).toHaveProperty('_id', 'Qwen')
  })
});
