import path from 'path'
import { KVSqliteResFuncParams, KVSqliteResFunc } from "@isdk/ai-tool-sqlite";
import { AIPromptSettings } from './prompt-settings';
import { getConfigs } from './config';

// const PROMPTS_DB_NAME = '.promptsdb'
// const eventBus = event.runSync()

interface AIPromptsFuncParams extends AIPromptSettings, KVSqliteResFuncParams {
}

export class AIPromptsFunc extends KVSqliteResFunc<AIPromptsFuncParams> {

  initDB() {
    const dirname = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'prompts');
    const configs = getConfigs(dirname)
    this.db.bulkDocs(configs);
  }
}
