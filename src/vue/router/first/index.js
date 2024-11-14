import { createRouter, createWebHistory } from "vue-router";

const example = () => import("@/vue/pages/first/example.vue");
const about = () => import("@/vue/pages/first/about.vue");

const routes = [
  {
    path: "/",
    component: example,
  },
  {
    path: "/about",
    component: about,
  },
];

const router = createRouter({
  mode: "hash",
  history: createWebHistory(),
  routes,
});

export default router;
