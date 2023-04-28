import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { createVitePlugins } from './build/plugins.js'

// 文档: https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const isBuild = command === 'build'

  return {
    plugins: createVitePlugins(mode, isBuild),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'packages': fileURLToPath(new URL('./packages', import.meta.url))
      }
    }
  }
})
