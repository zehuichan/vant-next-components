import { createApp } from 'vue'
import App from './App.vue'
// global css
import './styles/less/index.less'

import { setupVant } from './plugins/vant'
import { setupVcomponents } from './plugins/vcomponents'
import { setupRouter } from './router'

function bootstrap() {
  const app = createApp(App)

  setupVant(app)
  setupVcomponents(app)
  setupRouter(app)
  app.mount('#app')
}

bootstrap()
