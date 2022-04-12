import pkg from '/package.json'

import Badge from './badge'
import SvgIcon from './svg-icon'
import Price from './price'
import Backtop from './backtop'
import Card from './card'

const { version } = pkg

const components = [
  Badge,
  SvgIcon,
  Price,
  Backtop,
  Card
]

const install = (app) => {
  components.map(item => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export default {
  version,
  install,
  ...components
}