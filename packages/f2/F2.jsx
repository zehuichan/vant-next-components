import { defineComponent, onMounted, ref } from 'vue'
import { Canvas } from '@antv/f2'
import { createNamespace } from '../utils'

const [name] = createNamespace('f2')

export default defineComponent({
  name,
  props: {
    onRender: Function,
  },
  setup(props) {

    const canvasRef = ref(null)

    onMounted(() => {
      const canvasEl = canvasRef.value
      const context = canvasEl.getContext('2d')
      const children = props.onRender()
      console.log(children)
      const canvas = new Canvas({
        // 已经有高清方案，这里默认用1
        pixelRatio: window.devicePixelRatio || 1,
        // context 内部创建，不能被覆盖
        context,
        children
      })
      canvas.render()
    })

    return () => (
      <canvas
        ref={canvasRef}
        style="width: 100%; height: 100%; display:block; padding:0; margin:0;"
      />
    )
  }
})