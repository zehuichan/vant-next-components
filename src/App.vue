<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view/>
  </van-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'

const mode = useStorage('theme')

const themeVars = ref({})
</script>