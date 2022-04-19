<script setup>
import demo from './demo.vue'
</script>

<demo/>

### 介绍

返回页面顶部的操作按钮。

### 基础用法

```html
<!--基础用法-->
<v-backtop/>
```

## API

### Base Props

| 参数                | 说明                | 类型       | 默认值   |
|-------------------|-------------------|----------|-------|
| target            | 触发滚动的对象           | _string_ | _     |
| visibility-height | 滚动高度达到此参数值才出现     | _number_ | `200` |
| right             | 控制其显示位置, 距离页面右边距  | _number_ | `40`  |
| bottom            | 控制其显示位置, 距离页面底部距离 | _number_ | `40`  |