import Vue from "vue";
import VueRouter from "vue-router";
import Discovery from "@/views/discovery"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Discovery",
    component: Discovery,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
