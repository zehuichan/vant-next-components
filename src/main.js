import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './router'

function bootstrap() {
	const app = createApp(App)

	setupRouter(router)
	app.mount('#app')
}

bootstrap()
