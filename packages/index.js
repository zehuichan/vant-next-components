import pkg from '/package.json'

import Badge from './badge'

const { version } = pkg

function install(app) {
  const components = [Badge]

  components.forEach(item => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export default {
  version,
  install
}