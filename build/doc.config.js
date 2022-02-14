import baseConfig from './base.config'
import { defineConfig } from 'vite'

export default defineConfig({
  ...baseConfig,
  base: '/vant-next-components/',
  build: {
    outDir: 'docs',
  },
})
