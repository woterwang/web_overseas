/**
 * @Author: hqwx.com
 * @Date: 2024-07-05 14:40:34
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 16:21:43
 * @😍: 😃😃
 */
import vueRouter from "vue-router";
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
      },
      {
        path: "/buy",
        name: "buy",
        component: () => import("@/views/buy.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/login.vue"),
      },
      {
        path: "/create/:type", // 动态路由 type: 0: text 1: repair
        name: "create",
        component: () => import("@/views/create/index.vue"),
      }

    ],
  },
];

const router = new vueRouter({
  // mode: 'history',
  mode: 'hash',
  routes,
});
export default router;
