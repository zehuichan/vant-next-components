<template>
  <demo-card title="包含标题，内容和操作。">
    <v-card class="box-card">
      <template #header>
        <div class="card-header">
          <div>卡片名称</div>
          <van-button type="primary" size="mini">操作按钮</van-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </v-card>
  </demo-card>
  <demo-card title="卡片可以只有内容区域。">
    <v-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </v-card>
  </demo-card>
  <demo-card title="仿订单卡片。">
    <v-card class="box-card" :body-style="{padding: 0}" shadow="never">
      <div class="goods">
        <div class="goods-thumb">
          <van-image src="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
        </div>
        <div class="goods-content">
          <div>
            <div class="goods-title">商品名称</div>
            <div class="goods-desc">描述信息</div>
          </div>
          <div>
            <v-price/>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="text-right">
          <van-button plain size="small">延长收货</van-button>
          <van-button plain size="small">查看物流</van-button>
          <van-button plain size="small" type="warning">确认收货</van-button>
        </div>
      </template>
    </v-card>
  </demo-card>
</template>

<script setup>
import VCard from '..'
import VPrice from '../../price'
</script>

<style lang="less">
.box-card {
  width: 480px;

  .van-button + .van-button {
    margin-left: 10px;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  line-height: 20px;
}

.text-right {
  text-align: right;
}

.goods {
  padding: 12px;
  display: flex;

  .goods-thumb {
    position: relative;
    flex: none;
    width: 100px;
    height: 100px;
    margin-right: 8px;

    img {
      margin: 0;
      border-radius: 0;
    }
  }

  .goods-content {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    min-height: 100px;

    .goods-title {
      font-size: 16px;
      line-height: 1.5715;
      font-weight: 500;
    }

    .goods-desc {
      font-size: 14px;
      line-height: 1.5715;
      color: #646566;
    }

    .v-price {
      font-size: 14px;
    }
  }
}
</style>