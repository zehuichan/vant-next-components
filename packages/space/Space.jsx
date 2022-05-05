import { defineComponent, computed } from 'vue'
import { createNamespace, isArray, isNumber, filterEmpty } from '../utils'

const [name] = createNamespace('space')

import './index.less'

export default defineComponent({
  name,
  props: {
    align: String,
    direction: {
      type: String,
      default: 'horizontal',
    },
    size: {
      type: [Number, String, Array],
      default: 'small',
    },
    wrap: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
    },
  },
  setup(props, { slots }) {
    const mergedAlign = computed(
      () => props.align ?? (props.direction === 'horizontal' ? 'center' : '')
    )

    const cls = computed(() => [
      name,
      {
        [`${name}-${props.direction}`]: props.direction,
        [`${name}-align-${mergedAlign.value}`]: mergedAlign.value,
        [`${name}-wrap`]: props.wrap,
        [`${name}-fill`]: props.fill,
      },
    ])

    const getMargin = (size) => {
      if (isNumber(size)) {
        return size
      }
      switch (size) {
        case 'mini':
          return 4
        case 'small':
          return 8
        case 'medium':
          return 16
        case 'large':
          return 24
        default:
          return 8
      }
    }

    const getMarginStyle = (index, isLast) => {
      const style = {}

      const marginRight = `${getMargin(
        isArray(props.size) ? props.size[0] : props.size
      )}px`
      const marginBottom = `${getMargin(
        isArray(props.size) ? props.size[1] : props.size
      )}px`

      if (isLast) {
        return props.wrap ? { marginBottom } : {}
      }

      if (props.direction === 'horizontal') {
        style.marginRight = marginRight
      }
      if (props.direction === 'vertical' || props.wrap) {
        style.marginBottom = marginBottom
      }

      return style
    }

    return () => {
      const items = filterEmpty(slots.default?.())
      const isLast = items.length === 1

      return (
        <div class={cls.value}>
          {
            items.map((child, index) => (
              <div
                key={index}
                class={`${name}-item`}
                style={getMarginStyle(index, isLast)}
              >
                {child}
              </div>
            ))
          }
        </div>
      )
    }
  }

})