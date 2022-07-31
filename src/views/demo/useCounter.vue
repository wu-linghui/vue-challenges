<!-- 
  在这个挑战中，我们将实现一个计数器。 👇:
 -->
<script setup lang='ts'>
import { ref } from 'vue';


interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置 
 * 4. 最小值 & 最大值 选项支持
*/
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue)

  // Infinity 无穷大
  // -Infinity 无穷小
  const {max = Infinity, min = -Infinity} = options

  function inc(val:number = 1) {
    return (count.value = Math.min(max, count.value + val))
  }

  // 返回给定的一组数字中的最大值。如果给定的参数中至少有一个参数无法被转换成数字，则会返回 NaN
  function dec(val:number = 1) {
    return (count.value = Math.max(min, count.value - val))
  }

  function reset(val:number = initialValue) {
    return (count.value = val)
  }

  return {
    inc,
    dec,
    reset,
    count
  }
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

<template>
  <p>Count: {{count}}</p>
  <button @click="inc()">inc</button>
  <button @click="dec()">dec</button>
  <button @click="reset()">reset</button>
</template>
