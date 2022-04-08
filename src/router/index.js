import { createRouter, createWebHashHistory } from 'vue-router'
import config from '@/config.js'

const { nav } = config

const loadView = function () {
  const dynamicViewsModules = import.meta.globEager('/packages/**/*.md')
  const res = []
  const list = treeToList(nav, 'items')
  list.forEach(item => {
    if (!item.path) {
      return false
    }

    const tmp = {
      path: '/' + item.path,
      component: dynamicImport(dynamicViewsModules, item.path),
      name: item.path,
      meta: {
        title: item.title
      }
    }

    res.push(tmp)
  })

  return res
}

const treeToList = function (data, children = 'children') {
  let tmp = []
  data.forEach(item => {
    tmp.push(item)
    if (item[children] && item[children].length > 0) {
      const res = treeToList(item[children], children)
      tmp = tmp.concat(res)
    } else {
      // 删掉不存在 children 值的属性
      delete item[children]
    }
  })
  return tmp
}

const dynamicImport = (dynamicViewsModules, component) => {
  const keys = Object.keys(dynamicViewsModules)
  const matchKeys = keys.filter((key) => key.includes(component))
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0]
    return dynamicViewsModules[matchKey].default
  } else if (matchKeys?.length > 1) {
    console.warn(
      'Please do not create `.{vue,jsx,tsx}` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure'
    )
    return false
  } else {
    console.warn(`component: ${component} is not found`)
    return false
  }
}

/* Layout */
import Layout from '@/layout/index.jsx'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: Layout,
    children: loadView()
  },
  { path: '/:path(.*)*', redirect: '/404' }
]

// init router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
export function setupRouter(app) {
  app.use(router)
}
