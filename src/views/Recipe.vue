<template>
  <div class="recipe">
    <Header />
    <div class="container" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Recetas</a></li>
      </ol>
    </div>
    
    <Recipe />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Recipe from "@/components/Recipe.vue";

export default {
  name: "recipe",
  components: {
    Header,
    Recipe
  }
};
</script>
