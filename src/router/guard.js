import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

export function setupRouterGuard(router) {
  router.beforeEach(async (to, from) => {
    // start progress bar
    NProgress.start()
    // set page title
    document.title = getPageTitle(to.meta.title)
  })

  router.afterEach((to, from) => {
    NProgress.done()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
    NProgress.done()
  })
}