<!-- 
  你听说过 Web Components 吗 ?

  Vue 能很好地解析和创建 Web Components 。

  在这个挑战中，我们将尝试了解它，让我们开始吧 👇:
 -->
<script setup lang='ts'>

import { defineCustomElement, h, onMounted } from "vue"

/**
 * 实现以下代码创建一个自定义元素.
 * 确保页面输出 "Hello Vue.js".
*/

// 文档：https://v3.cn.vuejs.org/guide/web-components.html#vue-%E4%B8%8E-web-components

const VueJs = defineCustomElement({
  props: {
    message: {
      type: String,
      default: 'error'
    }
  },
  emits: {},
  // template: `<span>{{ message }}</span>`,
  render() {
    return h(
      'span',
      {},
      this.message
    )
  }
})

customElements.define('vue-js', VueJs)

onMounted(() => {
  document.getElementById("app")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <div id="app"></div>
</template>