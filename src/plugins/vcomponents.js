import Vcomponents from 'packages'
// components
import DemoCard from '../components/DemoCard.vue'

export function setupVcomponents(app) {
  app.use(Vcomponents)
// components
  app.component('DemoCard', DemoCard)
}