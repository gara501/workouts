import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Edit from "./views/Edit.vue";
import Add from "./views/Add.vue";
import Login from "./views/Login.vue";
import Free from "./views/Free.vue";
import Challenges from "./views/ChallengesList.vue";
import Bio from "./views/Biohacking.vue";
import Userhome from "./views/Userhome.vue";
import Recipes from "./views/Recipes.vue";
import Recipe from "./views/Recipe.vue";
import Admin from "./views/Admin.vue";
import firebase from 'firebase/app';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/home",
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
      path: "/",
      name: "free",
      component: Free
    },
    {
      path: "/dashboard/:id",
      name: "dashboard",
      component: Userhome,
      meta: { requiresAuth: true }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true }
    },
    {
      path: "/recipes",
      name: "recipes",
      component: Recipes
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: Recipe
    },
    {
      path: "/bio",
      name: "bio",
      component: Bio
    },
    {
      path: "/challenges",
      name: "challenges",
      component: Challenges
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
