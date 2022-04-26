<script setup>
import demo from './demo.vue'
</script>

<demo/>

### 介绍

区隔内容的分割线。

### 基础用法

```html
<!--水平分割线-->
<v-divider/>
<!--水平分割线-->
<v-divider dashed/>
<!--带文字的分割线-->
<v-divider dashed>Text</v-divider>
<!--垂直分割线-->
<v-divider type="vertical"/>
```

## API

### Base Props

| 参数             | 说明           | 类型        | 默认值     |
|----------------| -------------- |-----------|---------|
| dashed          | 价格数量    | _boolean_ | `false` |
| type    | 水平还是垂直类型，支持 _horizontal \| vertical_   | _string_ | `horizontal`   |
