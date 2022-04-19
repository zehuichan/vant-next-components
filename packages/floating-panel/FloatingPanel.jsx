import { defineComponent, ref, Teleport } from 'vue'
import { createNamespace } from '../utils'

import { useDraggable } from '@vueuse/core'

const [name] = createNamespace('floating-panel')

import { nearest } from './util'

import './index.less'

export default defineComponent({
  name,
  props: {
    anchors: {
      type: Array,
      default: () => []
    },
  },
  setup(props, { slots }) {
    const { anchors } = props
    const maxHeight = anchors[anchors.length - 1] ?? window.innerHeight

    const elementRef = ref(null)
    const headerRef = ref(null)
    const contentRef = ref(null)
    const pulling = ref(false)
    const bounds = {
      top: anchors[anchors.length - 1],
      bottom: anchors[0],
    }

    const nextY = ref(maxHeight - bounds.bottom)

    useDraggable(elementRef, {
      onStart: (position, event) => {
        const target = event.target
        const header = headerRef.value

        if (header === target || header?.contains(target)) {
          pulling.value = true
        } else {
          return false
        }
      },
      onMove: (position, event) => {
        pulling.value = true
        nextY.value = position.y
      },
      onEnd: (position, event) => {
        pulling.value = false
        nextY.value = nearest(anchors, position.y)
      }
    })

    return () => (
      <Teleport to="body">
        <div
          className="v-floating-panel"
          ref={elementRef}
          style={{
            height: `${maxHeight}px`,
            top: `${nextY.value}px`,
          }}
        >
          <div className="v-floating-panel-mask" style={{ display: pulling.value ? 'block' : 'none' }}/>
          <div className="v-floating-panel-header" ref={headerRef}>
            <div className="v-floating-panel-bar"/>
          </div>
          <div className="v-floating-panel-content" ref={contentRef}>
            {slots?.default()}
          </div>
        </div>
      </Teleport>
    )
  }
})