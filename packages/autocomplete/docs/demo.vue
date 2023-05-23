<template>
  <demo-card>
    <v-autocomplete
      :fetch-suggestions="querySearch('mark')"
    />
  </demo-card>
</template>

<script setup>
import VAutocomplete from '..'

function querySearch() {
  return (queryString, cb) => {
    cb([
      { label: '快递', value: 0, },
      { label: '自送', value: 1, }
    ])
  }
}
</script>

<style lang="less" scoped>
.box-card + .box-card {
  margin-top: 12px;
}

.text {
  font-size: 12px;
}
</style>