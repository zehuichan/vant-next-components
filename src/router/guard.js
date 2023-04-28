import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import { useTitle } from '@vueuse/core'

export function setupRouterGuard(router) {
  router.beforeEach(async (to, from) => {
    // start progress bar
    NProgress.start()
    // set page title
    useTitle(to.meta.title)
  })

  router.afterEach((to, from) => {
    NProgress.done()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
    NProgress.done()
  })
}