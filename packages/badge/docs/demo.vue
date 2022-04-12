<template>
  <demo-card title="基础用法">
    <v-badge/>
    <v-badge status="error"/>
    <v-badge status="default"/>
    <v-badge status="processing"/>
    <v-badge status="warning"/>
  </demo-card>
  <demo-card title="带文案">
    <v-badge>Success</v-badge>
    <br>
    <v-badge status="error">Error</v-badge>
    <br>
    <v-badge status="default">Default</v-badge>
    <br>
    <v-badge status="processing">Processing</v-badge>
    <br>
    <v-badge status="warning">Warning</v-badge>
  </demo-card>
  <demo-card title="自定义颜色">
    <v-badge color="#f50">Custom #f50</v-badge>
    <br>
    <v-badge color="#2db7f5">Custom #2db7f5</v-badge>
    <br>
    <v-badge color="#87d068">Custom #87d068</v-badge>
    <br>
    <v-badge color="#108ee9">Custom #108ee9</v-badge>
  </demo-card>
</template>

<script setup>
import VBadge from '..'
</script>