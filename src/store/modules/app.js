import { defineStore } from 'pinia'
import { useDark, useStorage } from '@vueuse/core'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      mode: useStorage('vantTheme'),
      isDark: useDark({
        valueDark: 'dark',
        valueLight: 'ligtht',
        storageKey: 'vantTheme'
      })
    }
  },
  actions: {
    changeMode(mode) {
      this.isDark = mode === 'dark'
      this.mode = mode
    }
  }
})
