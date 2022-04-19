import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('table')

import './index.less'

export default defineComponent({
  name,
})