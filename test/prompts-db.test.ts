// @vitest-environment node
import fastify from 'fastify'

import { ClientTools, ErrorCode, Funcs, NotFoundError, ResClientTools, ResServerTools, ToolFunc, wait } from "@isdk/ai-tool"
import { FuncParams, ServerTools } from '@isdk/ai-tool'
import { findPort } from '@isdk/ai-tool/test/util'

import { AIPromptsFunc, AIPromptsName } from '../src/prompts-db'

// const dbPath = '.promptsdb'
const dbPath = ':memory:'

describe('Prompts server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  let promptsFunc: AIPromptsFunc
  const server = fastify()

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    server.get('/api', async function(request, reply){
      reply.send(ResServerTools.toJSON())
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ResServerTools.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
      }
      let params: any
      const method = request.method
      if (method === 'GET' || method == 'DELETE') {
        params = (request.query as any).p
        if (params) {
          params = JSON.parse(params)
        } else {
          params = {}
        }
      } else {
        params = request.body;
        if (typeof params === 'string') {params = JSON.parse(params)}
      }
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) {params.id = id}

      // const result = JSON.stringify(await func.run(params))
      try {
        let result = await func.run(params)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          // console.log('🚀 ~ server.all ~ result:', result)
          reply.send(result)
        } else if (result) {
          reply.send(result)
        }
        // reply.send({params: request.params as any, query: request.query, url: request.url})
      } catch(e) {
        // console.log('🚀 ~ server.all ~ e:', e)
        if (e.code !== undefined) {
          const err: any = {...e, error: e.message}
          if (err.stack) {delete err.stack}
          if (typeof err.code === 'number') {
            reply.code(err.code).send(JSON.stringify(err))
          } else {
            reply.code(500).send(JSON.stringify(err))
          }
        } else if (e.message) {
          reply.code(500).send({error: e.message})
        } else {
          reply.code(500).send({error: e})
        }
      }
    })
    await wait(10)
    const port = await findPort(3000)
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ResServerTools.setApiRoot(apiRoot)
    promptsFunc = new AIPromptsFunc(AIPromptsName, {dbPath})
    await promptsFunc.initData()
    promptsFunc.register()

    ResClientTools.setApiRoot(apiRoot)
    await ResClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
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
    let result = await prompts.getParameters({id: 'ChatML', model: 'qwen1.5'})
    expect(result).toStrictEqual({
      stop_words: ['<|im_end|>', '[PAD151645]', '<|endoftext|>'],
      temperature: 0.01,
      top_p: 0.9,
    })
    result = await prompts.getParameters({id: 'ChatML', model: 'codeqwen1.5-7b-chat.Q4_0'})
    expect(result).toStrictEqual({
      stop_words: ['<|im_end|>', '[PAD151645]', '<|endoftext|>'],
      temperature: 0.01,
      top_p: 0.9,
    })
    result = await prompts.getParameters({id: 'ChatML', model: 'nous-hermes-2-yi-34b.Q4_0.gguf'})
    expect(result).toStrictEqual({
      min_p: 0.06,
      repeat_penalty: 1.1,
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
    expect(result.prompt).toHaveProperty('_id', 'ChatML')
  })
});
