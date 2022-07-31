<!-- 
  这个挑战开始,我们将尝试编写可组合函数，让我们从useToggle开始 👇:
 -->
<script setup lang='ts'>
import { Ref, ref, unref } from 'vue';

/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
*/
function useToggle(init: boolean) {
  const state: Ref<boolean> = ref(init)
  const toggle = () => {
    state.value = !state.value
  }

  return [state, toggle]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle()">
    Toggle state
  </p>
</template>