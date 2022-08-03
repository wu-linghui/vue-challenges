<!-- 
  在使用Vue.js时，我们应该关注可复用性，可组合函数是一个很好的方式，让我们开始吧 👇:
 -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


function useEventListener<T extends keyof HTMLElementEventMap>
  (target: any,
    event: T,
    callback: (ev: HTMLElementEventMap[T]) => any) {
  onMounted(() => 
    target.addEventListener(event, callback)
  )

  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}

function useMouse() {
  const x = ref<number>(0)
  const y = ref<number>(0)
  const callback = (evt: any) => {
    x.value = evt.pageX || document.body.scrollLeft + evt.clientX
    y.value = evt.pageY || document.body.scrollTop + evt.clientY
  }
  useEventListener(window, "mousemove", callback)
  return {
    x, y
  }
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
