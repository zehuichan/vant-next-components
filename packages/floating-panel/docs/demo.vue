<template>
  <v-floating-panel :anchors="anchors">
    <van-cell-group>
      <van-cell v-for="item in data" :title="item" value="内容" />
    </van-cell-group>
  </v-floating-panel>
</template>

<script setup>
import VFloatingPanel from '..'

const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]
const data = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
]
</script>

<style lang="less">
.target {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>