import path from 'path'

export function resolve(dir) {
  return path.join(__dirname, '../', dir)
}