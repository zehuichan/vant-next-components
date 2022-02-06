import { defineComponent, ref } from 'vue'

import './index.less'

export default defineComponent({
  name: 'Trigger',
  setup() {
    const opened = ref(true)

    const trigger = () => {
      opened.value = !opened.value
    }
    return ()=> (
      <div class="trigger">132</div>
    )
  },
})