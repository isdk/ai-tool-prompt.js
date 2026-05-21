import { cloneDeep, defaultsDeep } from "lodash-es"

export function getValueExtends(verName: string, versions?: Record<string, any>, clone?: boolean, visited?: Set<string>) {
  let result = versions?.[verName]
  if (!visited) visited = new Set()
  if (result) {
    if (clone) { result = cloneDeep(result) }
    const parent = result.extends
    if (parent && !visited.has(parent)) {
      visited.add(parent)
      result = defaultsDeep(result, getValueExtends(parent, versions, false, visited))
    }
  }
  return result
}
