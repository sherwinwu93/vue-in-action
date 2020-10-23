<template>
  <button
      class="my-button"
      @click="handleClick"
      :disabled="disabled || loading"
      :type="type"
      :class="[
        type ? 'my-button--' + type : '',
        buttonSize ? 'my-button--' + buttonSize : '',
        {
          'is-disabled': disabled,
          'is-loading': loading
        }
      ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    // 按钮类型, 如info,warn, error
    type: {
      type: String,
      default: "default"
    },
    // icon类型, 匹配样式
    icon: {
      type: String,
      default: ""
    },
    loading: Boolean, //是否在加载中
    disabled: Boolean //是否不可用
  },
  methods: {
    //点击触发click时间
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
}
</script>

<style scoped>

</style>