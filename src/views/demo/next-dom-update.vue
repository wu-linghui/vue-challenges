<script setup>
import { ref, nextTick } from "vue"

const count = ref(0)
const counter = ref(null)

const increment =  async () =>  {
  count.value++

  /**
   * DOM还未更新,如何确保DOM已经更新 ?
   * 请保证以下输出为true
  */
  await nextTick()
  console.log(+counter.value.textContent === 1)
  // console.log(document.getElementById("counter").textContent)
}
</script>

<template>
  <button ref="counter" id="counter" @click="increment">
    {{ count }}
  </button>
</template>