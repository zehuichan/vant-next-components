<template>
  <demo-card title="水平分割线">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider dashed/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </demo-card>
  <demo-card title="带文字的分割线">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <v-divider dashed>Text</v-divider>
  </demo-card>
  <demo-card title="垂直分割线">
    Text
    <v-divider type="vertical" />
    <a href="#">Link</a>
    <v-divider type="vertical" />
    <a href="#">Link</a>
  </demo-card>
</template>

<script setup>
import VDivider from '..'
</script>

<style scoped>

</style>