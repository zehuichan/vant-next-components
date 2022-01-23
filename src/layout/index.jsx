import './index.less'

// components
import NavMenu from './NavMenu/index.jsx'
import Content from './Content/index.jsx'

// config
import config from '@/config.js'

const Layout = {
  name: 'Layout',
  render() {
    return (
      <div class="v-doc">
        <NavMenu config={config.nav}/>
        <div class="v-doc-container">
          <Content/>
        </div>
      </div>
    )
  }
}

export default Layout