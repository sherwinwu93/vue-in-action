<template>
  <div>
    <router-view></router-view>
    <!--component元组件根据:is绑定-->
    <component
        v-for="(item, index) in items"
        :key="index"
        :is="item.component"
        :dialogInfo="item.dialogInfo"
        @done="doneDialog(index)"
    >
    </component>
  </div>
</template>

<script>
import ConfirmDialog from "./components/ConfirmDialog";
import vm from "./main";

export default {
  name: "app",
  data () {
    return {
      items: []
    };
  },
  mounted () {
    this.$nextTick(() => {
      vm.$on("setDialog", dialogInfo => {
        this.items.push({dialogInfo, component: ConfirmDialog});
      });
    });
  },
  methods: {
    doneDialog (index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style scoped>

</style>
