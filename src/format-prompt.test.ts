import path from 'path'
import { AIPromptSettings } from '../src'
import { formatPrompt } from './format-prompt'
import { ConfigFile } from './config'


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
    }, promptTemplate)
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
    }, promptTemplate)
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
    }, promptTemplate)
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
    }, promptTemplate)
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
    }, promptTemplate)
    expect(result).toStrictEqual(promptTemplate.prompt!.system + '\nuser: {user}\nassistant: {assistant}\nuser: {user}\nassistant: ')
  });
});