import { createPinia } from 'pinia'

const pinia = createPinia()

export function setupStore(app) {
  app.use(pinia)
}