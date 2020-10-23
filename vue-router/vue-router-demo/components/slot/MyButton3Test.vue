<template>
  <my-button3>
    <template v-slot:health>中医</template>
    <template v-slot:life>生活</template>
  </my-button3>
</template>

<script>
import MyButton3 from "./MyButton3";
export default {
  name: "MyButton3Test",
  components: {MyButton3}
}
</script>

<style scoped>

</style>