// with polyfills
import '@vant/touch-emulator'

import { createApp } from 'vue'
import App from './App.vue'

// global css
import './styles/less/index.less'

import { setupVant } from './plugins/vant'
import { setupStore } from './store'
import { setupVcomponents } from './plugins/vcomponents'
import { router, setupRouter } from './router'
import { setupRouterGuard } from './router/guard'

async function bootstrap() {
  const app = createApp(App)

  setupVant(app)
  setupStore(app)
  setupVcomponents(app)
  setupRouterGuard(router)
  setupRouter(app)
  app.mount('#app')
}

void bootstrap()
