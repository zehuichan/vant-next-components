import baseConfig from './base.config'
import resolve from './resolve'
import { defineConfig } from 'vite'

export default defineConfig({
	...baseConfig,
	build: {
		outDir: 'dist',
		lib: {
			entry: resolve('packages/index.js'),
			name: 'MYKit',
			fileName: (format) => `my-kit.${format}.js`,
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: []
})

