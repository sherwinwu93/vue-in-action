import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./pages/Home";
import Detail from "./pages/Detail";

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "/home", component: Home, name: 'Home',
    children: [
      {path: 'detail', component: Detail, name: 'Detail'}
    ]
  },
  {path: '*', redirect: {name: 'Home'}}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
