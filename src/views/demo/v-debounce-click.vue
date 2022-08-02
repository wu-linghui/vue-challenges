<!-- 
  在这个挑战中，我们将尝试实现一个防抖点击指令，让我们开始吧 👇:
 -->
<script setup lang='ts'>

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
 *
*/

import { Directive } from 'vue';

let debounce: Function | null = (handler: Function, deley: number = 200) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer!)
      timer = null
    }, deley)
    handler.apply(this, args)
  }
}

// const VDebounceClick = (): Directive => {
const VDebounceClick: Directive = {
  // let handler: {} | null = null
  mounted(el: HTMLButtonElement, binding) {
    // handler = debounce(binding.value, Number(binding.arg))
    el.addEventListener('click', debounce(binding.value, Number(binding.arg)))
  },
  unmounted(el, binding) {    
    debounce && el.removeEventListener('click', debounce(binding.value, Number(binding.arg)))
    debounce = null
  }
}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>