import { createRouter, createWebHistory } from "vue-router";
import { SET_PRELOADER } from "../core/vuex/modules/preloader.module";
import store from "../core/vuex/store";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // preloader open
  store.dispatch(SET_PRELOADER, true);

  setTimeout(() => {
    // preloader close and next
    store.dispatch(SET_PRELOADER, false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return next();
  }, 1000);
});

export default router;
