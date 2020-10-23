<template>
  <div>
    <MyButton>原按钮</MyButton>
    <!--给prop传入静态的值-->
    <MyButton type="info" icon="config">提示样式按钮(带管理图标)</MyButton>
    <!--v-bind动态赋值-->
    <MyButton type="info" :loading="true">提示样式按钮(加载中)</MyButton>
    <MyButton type="error" :disabled="true">错误样式按钮(不可用)</MyButton>
  </div>
</template>

<script>
import MyButton from "./MyButton";

export default {
  name: "MyButtonTest",
  components: {MyButton}
}
</script>

<style scoped>

</style>