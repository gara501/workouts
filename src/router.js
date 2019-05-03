import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Edit from "./views/Edit.vue";
import Add from "./views/Add.vue";
import Login from "./views/Login.vue";
import Free from "./views/Free.vue";
import firebase from 'firebase/app';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
      meta: { requiresAuth: true }
    },
    {
      path: "/add",
      name: "add",
      component: Add,
      meta: { requiresAuth: true }
    },
    {
      path: "/free",
      name: "free",
      component: Free
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      meta: { requiresAuth: true },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Register.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const protectedPath = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = firebase.auth().currentUser;
  if (protectedPath && currentUser === null) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
