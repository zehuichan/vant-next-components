<template>
  <van-config-provider :theme="appStore.mode">
    <router-view />
  </van-config-provider>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app.js'

const appStore = useAppStore()
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 6px;
}

:hover::-webkit-scrollbar-thumb {
  background-color: rgba(69, 90, 100, 0.2);
}
</style>