<script setup lang="ts">
import { ref, shallowRef, watch } from "vue"

// const state = ref({ count: 1 })
const state = shallowRef({ count: 1 })

// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
})


/**
 * 由于state是shallowRef,对象深层不会ref.因此watch deep也是无效的
 对于shallowRef. 只有改变对象本身才会触发
*/

// watch(state, () => {
//   console.log("State.count Updated")
// }, {deep: true})

/**
 * 修改以下代码使watch回调被触发
 *
*/

// 非递归监听， 不会触发watch\
// state.value.count = 2

state.value = {count: 2}

</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>