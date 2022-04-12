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

    return () => (
      <span class={['v-badge v-badge-status', props.color]}>
        <span
          class={['v-badge-status-dot', `v-badge-status-${props.status}`]}
          style={{ 'background-color': props.color }}
        />
        <span class="v-badge-status-text">{slots.default?.()}</span>
      </span>
    )
  }
})