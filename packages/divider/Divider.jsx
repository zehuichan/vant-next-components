import { computed, defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('divider')

import './index.less'

export default defineComponent({
  name,
  props: {
    dashed: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'horizontal'
    }
  },
  setup(props, { slots }) {

    const hasChildren = slots.default

    const _class = computed(() => (
      {
        'v-divider': true,
        [`v-divider-${props.type}`]: true,
        'v-divider-dashed': !!props.dashed,
        'v-divider-with-text': !!hasChildren
      }
    ))

    return () => (
      <div class={_class.value}>
        {slots.default && <div class="v-divider-inner-text">
          {slots.default()}
        </div>}
      </div>
    )
  }
})