import { createRouter, createWebHashHistory } from "vue-router";
import { defineAsyncComponent } from 'vue';
const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/components/layout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
