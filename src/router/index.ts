import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
