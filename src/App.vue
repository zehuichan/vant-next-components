<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view/>
  </van-config-provider>
</template>

<script setup>
import { watchEffect, ref } from 'vue'
import { useAppStore } from '@/store/modules/app.js'

const appStore = useAppStore()
const themeVars = ref({})

watchEffect(() => {
  themeVars.value = appStore.isDark
    ? {
      'cell-active-color': 'rgba(255, 255, 255, 0.1)',
      'cell-text-color': 'hsla(0, 0%, 100%, 0.9)',
      'cell-background-color': '#191919',
      'cell-group-background-color': '#191919',
      'cell-group-title-color': 'hsla(0, 0%, 100%, 0.35)',
    }
    : null
})
</script>