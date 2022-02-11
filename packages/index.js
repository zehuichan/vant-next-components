import pkg from '/package.json'

import Badge from './badge'
import SvgIcon from './svg-icon'

const { version } = pkg

const components = [
  Badge,
  SvgIcon
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