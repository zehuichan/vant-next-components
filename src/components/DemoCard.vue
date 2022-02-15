<template>
  <div class="v-doc-card">
    <h3 v-if="title">{{ title }}</h3>
    <slot/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoCard',
  props: {
    title: String
  }
})
</script>