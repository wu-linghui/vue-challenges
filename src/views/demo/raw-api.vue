<!-- 
  在这个挑战中，你将使用 响应式 API: [xx]Raw 来完成它。 以下是你要实现的内容 👇:
 -->

<script setup lang="ts">
import { reactive, isReactive, toRaw, markRaw } from "vue"

const state = { count: 1 }
const reactiveState = reactive(state)

/**
 * 修改以下代码使输出为true
*/
console.log(toRaw(reactiveState) === state)

/**
 * 修改以下代码使输出为false
*/
const info = markRaw({ count: 1 })
const reactiveInfo = reactive(info)

console.log(isReactive(reactiveInfo))

</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>

<!-- 
  文档：https://v3.cn.vuejs.org/api/basic-reactivity.html#toraw
 -->
