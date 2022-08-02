<!-- 
  在这个挑战中，我们将尝试实现一个函数式组件，让我们开始吧 👇:
 -->
<script setup lang='ts'>

import { h, PropType, ref } from "vue"

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
*/
const ListComponent = (props, { attrs, emit }) => {
  const items = props.list.map((item, index) => {
    return h('li', {
      class: `${index === props.activeIndex ? 'active' : ''}`,
      style: props.activeIndex === index ? {color: "red"}: undefined,
      onClick: async () => {
        emit('toggle', index)
      }
    }, item.name)
  })
  return h('ul', attrs, items)
}

ListComponent.props = {
  list: {
    type: Array as PropType<Array<{name: string}>>,
    default() {
      return []
    }
  },
  activeIndex: {
    type: Number,
    default: 0
  },
  toggle: {
    type: Function as PropType<(index: number) => void>,
    default: () => {}
  }
}

const list = [{
  name: "John",
}, {
  name: "Doe",
}, {
  name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}

</script>

<template>
  <list-component
    :list="list"
    :active-index="activeIndex"
    @toggle="toggle"
  />
</template>

<style>
  li.active {
    color: red;    
  }
</style>
