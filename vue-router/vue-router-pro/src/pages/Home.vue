<template>
  <div>
    <div>Home</div>
    <div>
      id:<input v-model="id"/>
      <br/>
      <router-link :to="{name:'Detail'}" tag="button">新建</router-link>
      <router-link :to="{name: 'Detail', query: {id: id}}" tag="button">修改</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      id: ""
    }
  }
}
</script>

<style scoped>

</style>