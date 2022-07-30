<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from "vue"

const scope = effectScope()
const counter = ref(1)
const doubled = computed(() => counter.value * 2)

scope.run(() => {
  // 使用 `effectScope` API 使这些Effect效果在触发一次后停止

  watch(doubled, () => console.log(doubled.value))
  watchEffect(() => console.log(`Count: ${doubled.value}`))
})

counter.value = 2

setTimeout(() => {
  scope.stop()
  counter.value = 4
})

// 解释：
// 第一次执行程序的时候，counter被定义，之后doubled第一次被computed计算出来，但是并没有执行watch，而是执行了watchEffect
// 所以将会输出：Count: 2

// 这时候counter的值被改变，触发了 computed重新计算doubled（4），进而触发了scope里面的watch 输出：4
//  因为 watchEffect的callback里的依赖doubled被修改了，所以也输出了一次：Count：4

// 之后在setTimeout先把scope.stop，再后来无论怎么改变counter的值，都无法触发watch和watchEffect了
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>

<!-- 
  文档：https://v3.cn.vuejs.org/api/effect-scope.html#effectscope
 -->
