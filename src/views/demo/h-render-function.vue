<!-- 
  在这个挑战中，你需要使用h渲染函数来实现一个组件。

  请注意: 你应该确保参数被正确传递、事件被正常触发和插槽内容正常渲染。让我们开始吧。
 -->
<script setup lang="ts">
import MyButton2 from "./MyButton"
const MyButton = () => MyButton2
// MyButton.props = {
//   disabled: {
//     type: Boolean,
//     require: true,
//     default: false
//   }
// }
const onClick = () => {
  console.log('onClick')
}
</script>
<template>
  <MyButton :disabled="false" @custom-click="onClick">
    my button
  </MyButton>
</template>