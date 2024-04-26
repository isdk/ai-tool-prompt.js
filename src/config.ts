import {readdirSync, type Dirent} from 'fs'
import path from 'path'
import { Config } from 'load-config-file'
import { parse, stringify } from 'yaml'
import { regexp } from 'yaml-types'

function parseYaml(content: string) {
  return parse(content, {customTags: [regexp]})
}

function parseJson(content: string) {
  return JSON.parse(content)
}

Config.register(['.yml', '.yaml'], parseYaml)
Config.register(['.json'], parseJson)

export { Config }

function traverseFolderSync(directoryPath: string, fileHandler: (filePath: string, entry: Dirent) => void) {
  const files = readdirSync(directoryPath, { withFileTypes: true, recursive: true });

  for (const entry of files) {
    const filePath = path.join(directoryPath, entry.name);

    if (entry.isFile()) {
      fileHandler(filePath, entry);
    }
  }
}

export function getConfigFiles(directoryPath: string) {
  const configFiles: string[] = [];

  traverseFolderSync(directoryPath, (filePath) => {
    const extname = path.extname(filePath);
    if (extname === '.yml' || extname === '.yaml' || extname === '.json') {
      configFiles.push(filePath);
    }
  });

  return configFiles;
}

export function getConfigs(directoryPath: string) {
  const files = getConfigFiles(directoryPath);
  return files.map(file => Config.loadSync(file)).filter(config => config !== undefined)
}