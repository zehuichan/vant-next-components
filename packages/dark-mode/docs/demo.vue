<template>
  <demo-card title="Button 按钮" class="demo-button">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </demo-card>
  <demo-card title="Cell 单元格">
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容"/>
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容"/>
    </van-cell-group>
    <van-cell-group title="分组3">
      <van-cell value="内容"/>
      <van-cell title="单元格" is-link/>
    </van-cell-group>
  </demo-card>
  <demo-card title="Field 输入框">
    <van-cell-group inset>
      <van-field v-model="value" label="文本" placeholder="请输入用户名"/>
    </van-cell-group>
  </demo-card>
</template>

<style lang="less">
.demo-button {
  .van-button + .van-button {
    margin-left: 10px;
  }
}
</style>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')
    return {
      value
    }
  }

}
</script>