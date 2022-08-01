<!-- 
  我们经常需要使用localStorageAPI，
  一个好用的可组合函数封装将帮助我们更好地使用它，让我们开始吧 👇:
 -->
<script setup lang='ts'>

import { computed, customRef, ref, watchEffect } from "vue"

/**
 * 实现`useLocalStorage`函数
*/
function useLocalStorage(key: string, initialValue: any) {
  // localStorage.setItem(key, initialValue)

  // customRef 方案 文档： https://v3.cn.vuejs.org/api/refs-api.html#customref
  // return customRef((track, trigger) => ({
  //   get() {
  //     track()
  //     return localStorage.getItem(key) || initialValue
  //   },

  //   set(newVal) {
  //     localStorage.setItem(key, newVal)
  //     trigger()
  //   }
  // }))

  // watchEffect 方案 文档： https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect

  const value = ref(localStorage.getItem(key) ?? initialValue)
  watchEffect(() => {
    localStorage.setItem(key, value.value)
  })
  return value

}

const counter = useLocalStorage("counter", 0)

// 我们可以通过触发`counter`的`getter`来获取本地存储的值
// console.log(counter.value)

// 同样地,我们也可以通过触发`counter`的`setter`来设置本地存储的值

const setLocal = () => counter.value = 1

</script>

<template>
  <p>Counter: {{counter}}</p>
  <button @click="setLocal()">set</button>
</template>
