import Vue from "vue";
import Vuex from "vuex";
import moduleUsers from "./modules/userStore";
import modulePrograms from "./modules/programStore";
import moduleRecipes from "./modules/recipeStore";

Vue.use(Vuex);

const store =  new Vuex.Store({
  modules: {
    users: moduleUsers,
    programs: modulePrograms,
    recipes: moduleRecipes
  },
  state: {
    error: {
      code: "",
      message: ""
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    userLoaded(state) {
      return state.users.userExists;
    }
  }
});

export default store;
