import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('badge')

import './index.less'

export default defineComponent({
  name,
  props: {
    color: String,
    status: {
      type: String,
      default: 'success'
    },
  },
  setup(props, { slots }) {
    const { color, status } = props

    return () => (
      <span class={['v-badge v-badge-status', color]}>
        <span
          class={['v-badge-status-dot', `v-badge-status-${status}`]}
          style={{ 'background-color': color }}
        />
        <span class="v-badge-status-text">{slots.default?.()}</span>
      </span>
    )
  }
})