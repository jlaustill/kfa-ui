import Vue from "vue";
import Router from "vue-router";
import trEsnlYtX from "./components/trEsnlYtX.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "trEsnlYtX",
      component: trEsnlYtX,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});
