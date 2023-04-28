import { defineConfig } from 'vite'
import { pathResolve, camelize } from './utils'

import pkg from '../package.json'

const { name } = pkg

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'lib',
    lib: {
      entry: pathResolve('packages/index.js'),
      name: camelize(name),
    },
    rollupOptions: {
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      },
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue']
    }
  }
})

