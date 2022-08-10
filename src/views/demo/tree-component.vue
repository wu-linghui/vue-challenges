<!-- 
  在这个挑战中，你需要实现一个树组件，让我们开始吧。
 -->
<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{data: TreeData[]}>()
</script>

<template>
  <!-- do something.... -->
  <ul>
    <template v-for="{ title, key, children } of data" :key="key">
      <li>{{ title }}</li>
      <tree-component v-if="Array.isArray(children)" :data="children"></tree-component>
    </template>
  </ul>
</template>