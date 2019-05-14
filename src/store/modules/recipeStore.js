import db from "../../firebase";

const moduleRecipes = {
  state: {
    recipes: [],
    recipe: { id: "", data: "" }
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setRecipe(state, recipe) {
      state.recipe = recipe;
    }
  },
  actions: {
    getRecipes({ commit }) {
      const recipes = [];
      db.collection("recipes")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let recipe = doc.data();
            recipe.id = doc.id;
            recipes.push(recipe);
          });
        });
      commit("setRecipes", recipes);
    },
    getRecipe({ commit }, id) {
      db.collection("recipes")
        .doc(id)
        .get()
        .then(doc => {
          let recipes = doc.data();
          recipes.id = doc.id;
          commit("setRecipe", recipes);
        });
    }
  },
  getters: {
    recipes(state) {
      return state.recipes;
    },
    recipe(state) {
      return state.recipe;
    }
  }
};

export default moduleRecipes;
