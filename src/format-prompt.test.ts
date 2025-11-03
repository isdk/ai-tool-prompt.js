import path from 'path'
import { AIPromptSettings } from '../src'
import { formatPrompt, getPromptSettings } from './format-prompt'
import { ConfigFile } from '@isdk/ai-tool';


const promptsPath = path.resolve(__dirname, '..', 'prompts')

describe('formatPrompt', () => {
  it('should format default prompt', async () => {
    const promptTemplate = ConfigFile.loadSync(promptsPath + '/default') as AIPromptSettings
    expect(promptTemplate).toHaveProperty('_id', 'default')
    let result = await formatPrompt({
      system: '',
      messages: [
        {
          role: 'user',
          content: '{user}'
        }
      ]
    }, {prompt: promptTemplate})
    expect(result).toStrictEqual('user: {user}\n')

    result = await formatPrompt({
      system: '',
      messages: [
        {
          role: 'system',
          content: '{system}',
        },
        {
          role: 'user',
          content: '{user}'
        },
      ]
    }, {prompt: promptTemplate})
    expect(result).toStrictEqual('{system}\nuser: {user}\n')

    result = await formatPrompt({
      system: '',
      add_generation_prompt: true,
      messages: [
        {
          role: 'system',
          content: '{system}',
        },
        {
          role: 'user',
          content: '{user}'
        },
      ]
    }, {prompt: promptTemplate})
    expect(result).toStrictEqual('{system}\nuser: {user}\nassistant: ')

    result = await formatPrompt({
      system: '',
      add_generation_prompt: true,
      messages: [
        {
          role: 'system',
          content: '{system}',
        },
        {
          role: 'user',
          content: '{user}'
        },
        {
          role: 'assistant',
          content: '{assistant}'
        },
        {
          role: 'user',
          content: '{user}'
        },
      ]
    }, {prompt: promptTemplate})
    expect(result).toStrictEqual('{system}\nuser: {user}\nassistant: {assistant}\nuser: {user}\nassistant: ')

    result = await formatPrompt({
      add_generation_prompt: true,
      messages: [
        {
          role: 'user',
          content: '{user}'
        },
        {
          role: 'assistant',
          content: '{assistant}'
        },
        {
          role: 'user',
          content: '{user}'
        },
      ]
    }, {prompt: promptTemplate})
    expect(result).toStrictEqual(promptTemplate.prompt!.system + '\nuser: {user}\nassistant: {assistant}\nuser: {user}\nassistant: ')
  });
});

describe('getPromptSettings', () => {
  it('should get prompt settings extented', async () => {
    const promptTemplate = ConfigFile.loadSync(promptsPath + '/Qwen') as AIPromptSettings
    expect(promptTemplate).toHaveProperty('_id', 'Qwen')
    const result = await getPromptSettings({
      version: 'qwq',
      system: '',
      messages: [
        {
          role: 'user',
          content: '{user}'
        }
      ]
    }, {prompt: promptTemplate})
    expect(result).toHaveProperty('supports')
    expect(result.supports).toHaveProperty('tools', true)
    expect(result.supports).toHaveProperty('thinkMode')
    expect((result.supports as any).thinkMode).toMatchObject(['deep'])
  })

  it('should get prompt data formatted', async () => {
    const promptTemplate = ConfigFile.loadSync(promptsPath + '/Gpt-oss') as AIPromptSettings
    expect(promptTemplate).toHaveProperty('_id', 'Gpt-oss')
    const result = await getPromptSettings({
      messages: [
        {
          role: 'user',
          content: '{user}'
        }
      ]
    }, {prompt: promptTemplate})
    expect(result.data!.system).toContain('You are ChatGPT')
    expect(result.data!.system).not.toMatch(/{{.*}}/)
  })
});
