import { defineComponent } from 'vue'

// components
import Header from './Header/index.jsx'
import NavMenu from './NavMenu/index.jsx'
import Content from './Content/index.jsx'

// config
import config from '@/config.js'

const { nav } = config

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <div class="v-doc">
        <Header/>
        <NavMenu config={nav}/>
        <div class="v-doc-container">
          <Content/>
        </div>
      </div>
    )
  }
})