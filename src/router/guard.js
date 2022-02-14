import getPageTitle from '@/utils/get-page-title'

export function setupRouterGuard(router) {
  router.beforeEach(async (to, from) => {
    // set page title
    document.title = getPageTitle(to.meta.title)
  })

  router.afterEach((to, from) => {

  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}