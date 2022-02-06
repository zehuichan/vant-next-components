import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Content',
  setup() {
    return () => (
      <router-view/>
    )
  }
})