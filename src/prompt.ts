import { AdvancePropertyManager } from 'property-manager';
import { AIPromptSchema } from './prompt-settings';

// 128271: 🔏
const LockedMagic = 128271

export class AIPrompt extends AdvancePropertyManager {
  isLocked(template: string) {
    return (template && template.codePointAt(0) === LockedMagic)
  }
}

AIPrompt.defineProperties(AIPrompt, AIPromptSchema)
