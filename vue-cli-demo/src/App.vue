<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<MyButtonTest></MyButtonTest>-->
    <!--<my-button2-test></my-button2-test>-->
    <my-button3-test></my-button3-test>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyButtonTest from "./components/prop/MyBottonTest.vue"
// import MyButton2Test from "./components/event/MyButton2Test";

import MyButton3Test from "./components/slot/MyButton3Test";
export default {
  name: 'App',
  components: {
    MyButton3Test
    // HelloWorld
    // MyButtonTest
    // MyButton2Test,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
