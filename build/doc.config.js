import { mergeConfig } from 'vite'
import baseConfig from './base.config'

export default mergeConfig(
  {
    base: '/vant-next-components/',
    build: {
      outDir: 'docs',
    },
  },
  baseConfig
)
