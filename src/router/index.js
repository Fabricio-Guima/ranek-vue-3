import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsUserView from "../views/user/ProductsUserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
      props: true,
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/users",
      name: "user",
      component: () => import("../views/user/UserView.vue"),

      children: [
        {
          path: "",
          name: "user.products",
          component: () => import("../views/user/ProductsUserView.vue"),
        },
        {
          path: "edit",
          name: "user.edit",
          component: () => import("../views/user/EditUserView.vue"),
        },
        {
          path: "purchases",
          name: "user.purchases",
          component: () => import("../views/user/PurchasesUserView.vue"),
        },
        {
          path: "sales",
          name: "user.sales",
          component: () => import("../views/user/SalesUserView.vue"),
        },
      ],
    },
  ],
});

export default router;
