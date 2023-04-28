import markdown from 'vite-plugin-vue-markdown'
import hljs from 'highlight.js'

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    // https://github.com/highlightjs/highlight.js/issues/2277
    return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
  }

  return ''
}

function markdownCardWrapper(htmlCode) {
  const group = htmlCode
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::')

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="v-doc-card">${fragment}</div>`
      }

      return fragment
    })
    .join('')
}

export function configMarkdownPlugin() {
  return markdown({
    wrapperClasses: 'v-doc-content',
    transforms: {
      after: markdownCardWrapper
    },
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: false, // https://markdown-it.github.io/markdown-it/#MarkdownIt
      highlight: markdownHighlight
    }
  })
}