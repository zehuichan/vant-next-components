<template>
  <demo-card>
    <v-card v-for="i in 20" :key="i" class="box-card" style="width: 250px">
      <div class="text">placeholder</div>
    </v-card>
  </demo-card>
  <v-backtop/>
</template>

<script setup>
import VBacktop from '..'
</script>

<style lang="less" scoped>
.box-card + .box-card {
  margin-top: 12px;
}

.text {
  font-size: 12px;
}
</style>