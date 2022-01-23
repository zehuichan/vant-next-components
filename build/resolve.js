import path from 'path'

export default function resolve(dir) {
	return path.join(__dirname, '../', dir)
}