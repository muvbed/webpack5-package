import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/vue/pages/second/index.vue"),
  },
];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes,
});

export default router;
