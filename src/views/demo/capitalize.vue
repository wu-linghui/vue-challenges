<script setup>
  import { ref, vModelText } from 'vue'
  const _vModelText = vModelText

  _vModelText.updated = (el, {value, modifiers: { capitalize }}) => {
    if (capitalize && value.hasOwnProperty(0)) {
      el.value = value[0].toUpperCase() + value.slice(1)
    }
  }

  const v = ref('')
</script>

<template>
  <input type="text" v-model.capitalize="v" />
</template>

<!-- 
  github-issues: https://github.com/webfansplz/vuejs-challenges/issues/308
  文档： https://v3.cn.vuejs.org/guide/custom-directive.html#%E7%AE%80%E4%BB%8B
 -->
