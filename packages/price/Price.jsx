import { computed, defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [name] = createNamespace('price')

import './index.less'

export default defineComponent({
  name,
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: true
    },
    symbol: {
      type: String,
      default: '&yen;'
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'before'
    }
  },
  setup(props) {

    const showSymbol = computed(() => {
      return props.needSymbol ? props.symbol : ''
    })

    const checkPoint = (price) => {
      return String(price).indexOf('.') > 0
    }

    const formatThousands = (num = 0) => {
      if (checkPoint(num)) {
        num = Number(num).toFixed(props.decimalDigits)
        num = typeof num.split('.') === 'string' ? num.split('.') : num.split('.')[0]
      } else {
        num = num.toString()
      }
      if (props.thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      } else {
        return num
      }
    }

    const formatDecimal = (decimalNum = 0) => {
      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(props.decimalDigits)
        decimalNum = typeof decimalNum.split('.') === 'string' ? 0 : decimalNum.split('.')[1]
      } else {
        decimalNum = decimalNum.toString()
      }
      const result = '0.' + decimalNum
      const resultFixed = Number(result).toFixed(props.decimalDigits)
      return String(resultFixed).substring(2, resultFixed.length)
    }

    return () => (
      <div class="v-price">
        {(props.needSymbol && props.position === 'before') && <div class="v-price--symbol" innerHTML={showSymbol.value}/>}
        <div class="v-price--big">
          {formatThousands(props.price)}
        </div>
        <div class="v-price--point">.</div>
        <div class="v-price--small">
          {formatDecimal(props.price)}
        </div>
        {(props.needSymbol && props.position === 'after') && <div class="v-price--symbol" innerHTML={showSymbol.value}/>}
      </div>
    )
  }
})