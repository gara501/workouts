<template>
  <div class="recipe">
    <div class="card-body">
      <div class="recipe-data mb-5">
        <div class="recipe-image">
          <img class="recipe-image" :src="recipe.image" alt="" />
        </div>
        <div class="recipe-info pl-2">
          <h5>Información</h5>
          <ul class="recipe-info list-group mt-2" >
            <li v-for="info of recipe.info" :key="info.id">{{info}}</li>
          </ul>
        </div>
      </div>
      <div class="recipe-details p-3">
        <div class="recipe-block recipe-ingredients">
          <h4>Ingredientes</h4>
          <ul class="list-group mt-2">
            <li v-for="step of recipe.ingredients" :key="step.id">{{step}}</li>
          </ul>
        </div>
        <div class="recipe-block recipe-steps ml-2">
          <h4>Pasos</h4>
          <ul class="list-group mt-2" >
            <li v-for="step of recipe.detail" :key="step.id">{{step}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Recipe",
  data() {
    return {
      id: this.$route.params.id
    }
  }, 
  computed: {
    ...mapState(["recipe"])
  },
  methods: {
    ...mapActions(["getRecipe"])
  },
  created() {
    this.getRecipe(this.id);
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.recipe {
  display: flex;
  flex-flow: column;
  text-align: left;

  .recipe-data {
    display: flex;
    flex-flow: column;
  
    .recipe-image {
      border: 2px solid rgba(0,0,0,.03);
      height: auto;
      width: 100%;
    }
    .recipe-info {
      display: flex;
      flex-flow: column;
      list-style: none;
      text-align: left;
    }
  }
  .recipe-details {
    display: flex;
    flex-flow: row;
    .recipe-block {
      flex: 1;
    }
  }
  @media only screen and (min-width: 600px) {

  }
  @media only screen and (min-width: 768px) {
    flex-flow: row;
    .recipe-data {
      flex-flow: row;
    }
    .recipe-image {
      border: 2px solid rgba(0,0,0,.03);
      height: 400px;
    }
  }
}
</style>
