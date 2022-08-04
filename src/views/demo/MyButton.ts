import { defineComponent, h } from "vue";

// 文档：https://v3.cn.vuejs.org/api/global-api.html#h

// function MyButton(props, {emit, slots}) {
//   return h('button', {
//     disabled: props.disabled,
//     onClick: () => emit('custom-click'),
//   },{
//     default: () => slots
//   })
// }

// MyButton.props = ['disabled']
// MyButton.emits =['custom-click']

// export default MyButton


// 文档：https://v3.cn.vuejs.org/api/global-api.html#definecomponent

export default defineComponent({
  name: 'MyButton',
  props: {
    disabled: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: ['custom-click'],
  render() {
    return h(
      'button',
      {
        disabled: this.disabled,
        onClick: () => this.$emit('custom-click')
      },
      {
        default: () => this.$slots
      }
    )
  },
})