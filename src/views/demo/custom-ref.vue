<!-- 
  防抖函数在输入框操作场景中非常有用。

  一个 防抖的ref在Vue.js更加灵活，让我们开始吧 👇:
 -->
<script setup>
import { customRef, watch } from "vue"

/**
 * 补全以下函数来实现防抖ref :
*/
function useDebouncedRef(value, delay = 200) {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },

      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal
          trigger()
        }, delay)
      }
    }
  })
}
const text = useDebouncedRef("hello")

/**
 * 确保在输入框快速输入时, 只触发一次回调。
*/
watch(text, (value) => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>