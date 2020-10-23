<template>
  <div>
    <my-button2 @plus="handlePlus"></my-button2>
    <h1>{{menberNum}}</h1>
  </div>
</template>

<script>
import MyButton2 from "./MyButton2";

export default {
  name: "MyButton2Test",
  components: {MyButton2},
  data () {
    return {
      "menberNum": 0
    }
  },
  methods: {
    handlePlus (num) {
      this.menberNum += num;
    }
  }
}
</script>

<style scoped>

</style>