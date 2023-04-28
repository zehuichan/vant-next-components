import { resolve } from 'path'

export function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
}

export function camelize(name) {
  return name.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())
}