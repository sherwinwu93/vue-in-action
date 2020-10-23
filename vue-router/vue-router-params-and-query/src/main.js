import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from "./components/Home";
import Page2 from "./components/Page2";
import Page1 from "./components/Page1";

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {
    path: "/home", component: Home, name: "Home",
    children: [
      {path: "page1/:id", component: Page1, name: "Page1"},
      {path: "page2", component: Page2, name: "Page2"}
    ]
  },
  {path: "*", redirect: {name: 'Home'}}
];
var router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
