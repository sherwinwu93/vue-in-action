import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from "./page/Home";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";

Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  //以/开头的嵌套路径会被当做跟路径
  {
    path: "/home",
    component: Home,
    name: "Home",
    children: [
      {path: "page1", component: Page1, name: "Page1"},
      {path: "page2", component: Page2, name: "Page2"}
    ]
  },
  //* 匹配所有路径
  //通常用于404错误
  //含有通配符的路由应该放在最后
  {path: "*", redirect: {name: "Home"}}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
