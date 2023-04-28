import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { configMarkdownPlugin } from './highlight'
import { configSvgIconsPlugin } from './svgSprite'

export function createVitePlugins(viteEnv, isBuild) {

  const vitePlugins = [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx()
  ]

  vitePlugins.push(configMarkdownPlugin())

  vitePlugins.push(configSvgIconsPlugin(isBuild))

  return vitePlugins
}