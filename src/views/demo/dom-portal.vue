<script setup>

const msg = "Hello World"

</script>

<template>
  <!-- 将以下元素渲染成`body`的子元素 -->
  <teleport to="body">
    <span>{{ msg }}</span>
  </teleport>
</template>

<!-- 文档：https://v3.cn.vuejs.org/guide/teleport.html#teleport -->
