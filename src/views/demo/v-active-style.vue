<!-- 
  在这个挑战中，我们将实现一个"激活的样式"指令，让我们开始吧 👇:
 -->
<script setup lang='ts'>

import { Directive, ref, watchEffect } from "vue"

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 * 
*/
const VActiveStyle: Directive = {
  mounted(el, binding) {
    let [style, fn] = binding.value
    watchEffect(() => {
      const result = fn()
      for (const key in style) {
        if (Object.prototype.hasOwnProperty.call(style, key)) {
          el.style[key] = result ? style[key] : ''
        }
      }
    })
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <ul>
    <li
      v-for="(item,index) in list"
      :key="index"
      v-active-style="[{'color':'red'},() => activeTab === index]"
      @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>