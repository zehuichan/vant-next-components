import { mergeConfig } from 'vite'
import baseConfig from '../vite.config.js'

export default mergeConfig(
  {
    base: '/vant-next-components/',
    build: {
      outDir: 'docs'
    }
  },
  baseConfig
)
