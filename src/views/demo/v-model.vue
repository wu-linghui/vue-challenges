<!-- 
  在这个挑战中，我们将尝试实现一个简单的v-model指令，让我们开始吧 👇:
 -->
<script setup lang='ts'>

import { Directive, ref } from "vue"

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
*/
const VOhModel: Directive<HTMLInputElement, string> = {
  mounted(el, binding) {
    el.value = binding.value
    el.$onInput = (evt: Event) => {value.value = evt.target.value}
    el.addEventListener('input', el.$onInput)
  },

  unmounted(el) {
    el.removeEventListener('input', el.$onInput)
  }
}

const value = ref("Hello Vue.js")

</script>

<template>
  <input v-oh-model="value" type="text" />
  <p>{{ value }}</p>
</template>