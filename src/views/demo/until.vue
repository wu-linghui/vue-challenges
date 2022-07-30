<!-- 
  有些时候，我们需要依赖于异步的返回结果做一些后续处理，
  until函数在这种场景下非常有用，你能实现它吗 ? 让我们来试试吧 👇:
 -->
<script setup lang='ts'>
import { Ref, ref } from "vue"

const count = ref(0)

/**
 * 实现`until`函数
*/

function until(initial: Ref<number>) {
  async function toBe(value: number) { // async 函数返回就是一个resolve状态的peomise函数
    return initial.value = value
  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // 确保输出为true
}

</script>

<template>
  <p @click="increase">Increase</p>
</template>
