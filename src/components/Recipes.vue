<template>
<div class="container">
  <div class="recipes">
    <div class="recipe-item" v-for="recipe of recipes" :key="recipe.id">
        <img class="recipe-image" :src="recipe.image" :alt="recipe.name" />
        <h5 class="mt-3">{{recipe.name}}</h5>
        <router-link :to="{name: 'recipe', params: {id: recipe.id}}">
          <button class="btn btn-success mr-2">Ver detalle</button>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Recipes",
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    },
  },
  methods: {
    getRecipes() {
      this.$store.dispatch("getRecipes", this.id);
    }
  },
  created() {
    this.getRecipes();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recipes {
  display: flex;
  flex-flow: row;

  .recipe-item {
    border: 1px solid rgba(0,0,0,.125);
    height: 300px;
    width: auto;

    img {
      height: 200px;
      width: auto;
    }
  }
}
</style>
