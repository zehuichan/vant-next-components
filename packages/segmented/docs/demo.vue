<template>
  <demo-card title="基本">
    <v-segmented v-model="value" :columns="columns" :columns-field-names="{text:'label',value:'value'}"/>
  </demo-card>
  <demo-card title="不可用">
    <v-segmented v-model="value" :columns="columns" :columns-field-names="{text:'label',value:'value'}" disabled/>
  </demo-card>
  <demo-card title="自定义">
    <v-segmented v-model="value" :columns="columns" :columns-field-names="{text:'label',value:'value'}">
      <template #default="{item, index, checked}">
        {{ item.text }} {{ index }} {{ checked }}
      </template>
    </v-segmented>
  </demo-card>
</template>

<script setup>
import { ref } from 'vue'
import VSegmented from '..'

const value = ref(3)
const columns = [
  { label: '选项一', value: 1 },
  { label: '选项二', value: 2, disabled: true },
  { label: '选项三', value: 3 },
  { label: '选项四', value: 4 },
  { label: '选项五', value: 5 },
]
</script>

<style scoped>

</style>