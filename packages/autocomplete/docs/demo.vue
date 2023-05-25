<template>
  <demo-card>
    <v-autocomplete
      v-model="value"
      label="autocomplete"
      placeholder="placeholder"
      :columns="columns"
      :params="{value}"
    />
  </demo-card>
</template>

<script setup>
import { ref } from 'vue'
import VAutocomplete from '..'

const value = ref('')

const columns = [
  { label: '快递', value: 0, },
  { label: '自送', value: 1, }
]
</script>

<style lang="less" scoped>
.box-card + .box-card {
  margin-top: 12px;
}

.text {
  font-size: 12px;
}
</style>