import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('card')

import './index.less'

export default defineComponent({
  name,
  props: {
    header: String,
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    extraStyle: {
      type: Object,
      default: () => ({})
    },
    shadow: String
  },
  setup(props, { slots }) {
    return () => {
      const { header, bodyStyle, extraStyle, shadow } = props
      return (
        <div class={['v-card van-hairline--surround', shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow']}>
          {(slots.header || header) && <div class="v-card__header van-hairline--bottom">
            {slots.header()}
          </div>}
          <div class="v-card__body" style={bodyStyle}>
            {slots?.default()}
          </div>
          {slots.extra && <div class="v-card__extra van-hairline--top" style={extraStyle}>
            {slots.extra()}
          </div>}
          {slots.footer && <div class="v-card__footer van-hairline--top">
            {slots.footer()}
          </div>}
        </div>
      )
    }
  }
})
