<!-- 
  有些时候，我们想在具有CSS作用域的Vue单文件组件设置全局CSS样式， 该怎么设置呢 ? 
  让我们开始吧 👇:
 -->
<template>
  <p>Hello Vue.js</p>
</template>

<style scoped>

p {
  font-size:20px;
  color:red;
  text-align: center;
  line-height: 50px;
}

/* 使其工作 */
/* 文档：https://v3.cn.vuejs.org/api/sfc-style.html#style-scoped */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>