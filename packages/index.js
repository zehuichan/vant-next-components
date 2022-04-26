import pkg from '/package.json'

import Backtop from './backtop'
import Badge from './badge'
import Card from './card'
import Divider from './divider'
import F2 from './f2'
import Price from './price'
import Space from './space'
import SvgIcon from './svg-icon'
import Table from './table'

const { version } = pkg

const components = [
  Backtop,
  Badge,
  Card,
  Divider,
  F2,
  Price,
  Space,
  SvgIcon,
  Table,
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