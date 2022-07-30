<!-- 
  Vue.js 提供了一个指令，以便只渲染一次元素和组件，并且跳过以后的更新。
  你知道它是什么吗 ? 让我们试试👇:
 -->
<script setup>
import { ref } from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <span v-once>使它从不更新: {{ count }}</span>
</template>

<!-- 
  文档：https://v3.cn.vuejs.org/api/directives.html#v-once
 -->
