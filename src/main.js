import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import { routes } from "./routes";
import { store } from "./store/store";
Vue.use(VueRouter);

Vue.use(VueAxios, axios);

Vue.component("app-home", Home);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
