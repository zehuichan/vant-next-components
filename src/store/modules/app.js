import { defineStore } from 'pinia'
import { useDark, useStorage } from '@vueuse/core/index'


export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      mode: useStorage('themeMode'),
      isDark: useDark({
        selector: 'html',
        attribute: 'theme-mode',
        valueDark: 'dark',
        valueLight: 'light',
        storageKey: 'themeMode'
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
