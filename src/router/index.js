import { createRouter, createWebHashHistory } from 'vue-router'
import config from '@/config.js'

const { nav } = config

const modules = import.meta.glob('/packages/*/docs/README.md')

const loadView = function () {
  const res = []
  const list = treeToList(nav, 'items')
  list.forEach(item => {
    const tmp = {
      path: '/' + item.path,
      component: modules[`/packages/${item.path}/docs/README.md`],
      name: item.path,
      meta: {
        title: item.title
      }
    }
    if (item.path === 'home') {
      tmp.component = () => import('@/markdown/home.md')
    }
    if (item.path === 'quickstart') {
      tmp.component = () => import('@/markdown/quickstart.md')
    }
    if (item.path === 'jweixin') {
      tmp.component = () => import('@/markdown/jweixin.md')
    }
    if (item.path === 'auth') {
      tmp.component = () => import('@/markdown/auth.md')
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
    path: '',
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
