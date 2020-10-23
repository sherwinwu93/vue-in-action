<template>
  <div>
    <div>Home</div>
    <div>
      <router-link :to="{name: 'Page1'}" tag="button">goto Page1</router-link>
      <router-link :to="{name: 'Page2'}" tag="button">goto Page2</router-link>
    </div>
    <!--子界面占位符-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>