import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('svg-icon')

import './index.less'

export default defineComponent({
  name,
  props: {
    name: String,
    classPrefix: String,
    size: [String, Number]
  },
  methods: {
    addUnit(value) {
      return this.isNumeric(value) ? `${value}px` : String(value)
    },
    isNumeric(val) {
      return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
    }
  },
  setup(props) {
    const { name, classPrefix, size } = props

    const addUnit = (value) => {
      return isNumeric(value) ? `${value}px` : String(value)
    }

    const isNumeric = (value) => {
      return typeof value === 'number' || /^\d+(\.\d+)?$/.test(value)
    }

    return () => (
      <svg class={[classPrefix, 'iconfont']} style={{ fontSize: addUnit(size) }} aria-hidden="true">
        <use xlinkHref={`#${name}`}/>
      </svg>
    )
  }
})