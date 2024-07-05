/**
 * @Author: hqwx.com
 * @Date: 2024-07-05 14:40:34
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-05 18:17:17
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
