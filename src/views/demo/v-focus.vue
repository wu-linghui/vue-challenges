<!-- 
  这个挑战开始，我们将尝试编写自定义指令，让我们从v-focus开始 👇:
 -->
<script setup lang='ts'>
import { ref } from "vue"

const state = ref(false)

/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换`state`时,元素随着状态值获取/失去焦点
 *
*/

// 函数式写法
const VFocus = (el: HTMLInputElement, arg: any) => {
  if (arg.value) return el.focus();
  el.blur();
}

// const VFocus = {
//   updated(el: HTMLInputElement, arg: any) {
//     if (arg.value) return el.focus();
//     el.blur();
//   },
// }

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <input v-focus="state" type="text">
</template>