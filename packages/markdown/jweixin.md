### 介绍

微信JSSDK食用方法。

### @/hooks/useWeixin.js

```js
import { nextTick, ref } from 'vue'
import { useScriptTag } from '@vueuse/core'
// 替换成你后端接口=====
import { wxconfig } from '@/api/user'
// 替换成你后端接口=====

export default function useWeixin(options = { debug: false }) {
  const { load } = useScriptTag('//res.wx.qq.com/open/js/jweixin-1.6.0.js')
  const ready = ref(false)
  const instance = ref(null)

  async function initWxConfig() {
    await load()
    await nextTick()
    instance.value = window.wx
    const url = encodeURIComponent(location.href.split('#')[0])
    const res = await wxconfig(url)
    const config = Object.assign({}, res, options)
    instance.value.config(config)
    instance.value.ready(() => {
      ready.value = true
    })
    instance.value.error(() => {
      ready.value = false
    })
  }

  !ready.value && initWxConfig()

  return [ready, instance]
}
```

### 初始化

```js
import { useWeixin } from '@/hooks'

const [ready, wx] = useWeixin()
```

### scanQRCode

```js
const scanQRCode = () => {
  wx.value.scanQRCode({
    needResult: 1,
    scanType: ['qrCode', 'barCode'],
    success: (res) => {
      alert(res.resultStr)
    }
  })
}
```

### previewImage

```js
const previewImage = () => {
  wx.value.previewImage({
    current: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    urls: [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg'
    ]
  })
}
```