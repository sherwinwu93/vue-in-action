import Vue from 'vue'
import App from './pages/Todo.vue'
import VueRouter from 'vue-router'
import Todo from "./App";

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {
    path: "/todo", component: Todo, name: "Todo"
  },
  {
    path: "*", redirect: {name: "Todo"}
  }
];
let router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
