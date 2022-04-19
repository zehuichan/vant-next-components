<template>
  <v-f2 :on-render="init"></v-f2>
</template>

<script setup>
import '..'
import { createElement } from '@antv/f2'
import Chart from './Chart'

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
]

const init = function () {
  return createElement(Chart, {
    data,
  })
}
</script>

<style scoped>

</style>