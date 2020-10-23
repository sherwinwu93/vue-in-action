<template>
  <div>
    <div>Home</div>
    <div>
      <input v-model="id"/>
      <br/>
      <router-link :to="{name:'Page1',params:{id: id}}" tag="button">goto Page1</router-link>
      <router-link :to="{name:'Page2',query:{id: id}}" tag="button">goto Page2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      "id": null
    }
  }
}
</script>

<style scoped>

</style>