<template>
  <van-config-provider :theme="appStore.mode">
    <router-view />
  </van-config-provider>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app.js'

const appStore = useAppStore()
</script>