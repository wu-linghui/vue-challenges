<!-- 请验证Button组件的Prop类型 ，
使它只接收: primary | ghost | dashed | link | text | default ，且默认值为default。 
-->
<script setup>
defineProps({
  type: {
    type: String,
    validator(val) {
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(val)
    },
    default() {
      return 'default'
    }
  },
})
</script>

<template>
  <button>Button</button>
</template>

<!-- 
  文档：https://v3.cn.vuejs.org/guide/component-props.html#prop-%E9%AA%8C%E8%AF%81
 -->
