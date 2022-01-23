import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import resolve from './resolve'

// 文档: https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve('src'),
			packages: resolve('packages'),
		},
	},
	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/],
		}),
		VueJsx(),
		Markdown(),
	],
})
