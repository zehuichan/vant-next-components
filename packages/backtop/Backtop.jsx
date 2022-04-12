import { computed, onMounted, onUnmounted, ref, Transition } from 'vue'

import { createNamespace } from '../utils'

const [name] = createNamespace('backtop')

import { throttle, easeInOutCubic } from './util'

import './index.less'

export default {
  name,
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: String,
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  setup(props, { emit, slots }) {
    const el = ref(null)
    const container = ref(null)
    const visible = ref(false)

    const styleBottom = computed(() => `${props.bottom}px`)
    const styleRight = computed(() => `${props.right}px`)

    onMounted(() => {
      init()
      container.value.addEventListener('scroll', throttledScrollHandler)
    })

    onUnmounted(() => {
      container.value.removeEventListener('scroll', throttledScrollHandler)
    })

    const init = () => {
      container.value = document
      el.value = document.documentElement
      if (props.target) {
        el.value = document.querySelector(props.target)
        if (!el.value) {
          throw new Error(`target is not existed: ${props.target}`)
        }
        container.value = el.value
      }
    }
    const onScroll = () => {
      const scrollTop = el.value.scrollTop
      visible.value = scrollTop >= props.visibilityHeight
    }
    const handleClick = (event) => {
      event.stopPropagation()
      scrollToTop()
      emit('click', event)
    }
    const scrollToTop = () => {
      const beginTime = Date.now()
      const beginValue = el.value.scrollTop
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          rAF(frameFunc)
        } else {
          el.value.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }
    const throttledScrollHandler = throttle(onScroll, 300)

    return () => (
      <Transition name="van-fade">
        <div
          vShow={visible.value}
          onClick={handleClick}
          style={{
            right: styleRight.value,
            bottom: styleBottom.value
          }}
          class="v-backtop"
        >
          {slots.default ? slots.default : <van-icon name="back-top"/>}
        </div>
      </Transition>
    )
  }
}