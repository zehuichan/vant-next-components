<script setup>
import demo from './demo.vue'
</script>

<demo/>

### 介绍

分段控制器。

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

### 基础用法

```html
<!--基本-->
<v-segmented v-model="value" :columns="columns" :columns-field-names="{text:'label',value:'value'}"/>
<!--不可用-->
<v-segmented v-model="value" :columns="columns" :columns-field-names="{text:'label',value:'value'}" disabled/>
<!--自定义-->
<v-segmented v-model="value" :columns="columns" :columns-field-names="{text:'label',value:'value'}">
  <template #default="{item, index, checked}">
    {{ item.text }} {{ index }} {{ checked }}
  </template>
</v-segmented>
```

## API

### Base Props

| 参数       | 说明          | 类型         | 默认值    |
|----------|-------------|------------|--------|
| v-model   | 当前输入的值      | _string \| number_ | `_`     |
| columns  | 数据化配置选项内容   | _array_    | `[]`   |
| columns-field-names    | 自定义 `columns` 结构中的字段   | _object_    | `{ text: 'text', value: 'value' }`    |
| block    | 将宽度调整为父元素宽度的选项 | _boolean_  | `false` |
| disabled | 是否禁用        | _boolean_  | `false` |
| size     | 控件尺寸  `large` \| `middle`  \| `small` | _string_  | `middle`    |
