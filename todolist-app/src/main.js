import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Todo from "./pages/Todo";

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
  routes: routes
});

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

