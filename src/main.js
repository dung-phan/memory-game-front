import Vue from "vue";
import VueSource from "vue-resource";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(VueSource);

Vue.component("app-home", Home);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
