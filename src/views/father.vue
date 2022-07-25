<template>
  <child></child>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import child from './demo/dependency-injection.vue';

const count = ref(1);
provide('count', count);
setTimeout(() => {
  count.value++;
}, 1000);
</script>

<style scoped>

</style>