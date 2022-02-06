import { defineComponent } from 'vue'

import './index.less'

// components
import NavMenu from './NavMenu/index.jsx'
import Content from './Content/index.jsx'
import Trigger from './Trigger/index.jsx'

// config
import config from '@/config.js'

const { nav } = config

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <div class="v-doc">
        <div class="v-doc-aside">
          <NavMenu config={nav}/>
          <Trigger/>
        </div>
        <div class="v-doc-container">
          <Content/>
        </div>
      </div>
    )
  }
})