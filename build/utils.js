import path from 'path'

export function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

export function camelize(name) {
  return name.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())
}