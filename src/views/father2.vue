<template>
  <life v-if="visible"></life>
  <p>
    <button @click="toggle">
      Toggle Child Component
    </button>
  </p>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import life from './demo/lifecycle.vue';

const count = ref(0);
provide('count', count);

const visible = ref(true)
const timer = ref(null)
provide('timer', timer)
function toggle() {
  visible.value = !visible.value
}
</script>

<style scoped>

</style>