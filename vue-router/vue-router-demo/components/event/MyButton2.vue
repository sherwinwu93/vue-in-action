<template>
  <div>
    <button v-on:click="$emit('test')">test</button>
    <!-- $emit 可以通过参数传值 -->
    <button v-on:click="$emit('plus', 1)">Plus One</button>
  </div>
</template>

<script>
export default {
  name: "MyButton2"
}
</script>

<style scoped>

</style>