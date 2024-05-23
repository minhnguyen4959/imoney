import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { projectAuth } from "@/configs/firebase";
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) next({ name: "login", params: {} });
  else next();
};
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "default-layout",
      text: "Hello",
      isShowFooter: true,
      leading: true //quyết định hiển thị logo hay k 

    },
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    meta: {
      layout: "auth-layout",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth-layout",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      layout: "auth-layout",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogoutView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      layout: "default-layout",
      leading: false,
      text: "Profile",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfilePage.vue"),

    beforeEnter: requireAuth
  },
  {
    path: "/report",
    name: "report",
    meta: {
      layout: "default-layout",
      text: "Report",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReportPage.vue"),

    beforeEnter: requireAuth
  },
  {
    path: "/budget",
    name: "budget",
    meta: {
      layout: "default-layout",
      text: "Budget",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BudgetPage.vue"),

    beforeEnter: requireAuth
  },
  {
    path: "/new-transaction",
    name: "new-transaction",
    meta: {
      layout: "default-layout",
      text: "Transaction",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewTransaction.vue"),

    beforeEnter: requireAuth
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
