import hljs from 'highlight.js'
import vitePluginMd from 'vite-plugin-md'
import vitePluginVue from '@vitejs/plugin-vue'
import vitePluginJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from './utils'

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
  }

  return ''
}

// 文档: https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      '@': resolve('src'),
      packages: resolve('packages'),
    },
  },
  plugins: [
    vitePluginVue({
      include: [/\.vue$/, /\.md$/],
    }),
    vitePluginMd({
      markdownItOptions: {
        typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
        highlight: markdownHighlight,
      },
    }),
    vitePluginJsx(),
  ],
}
