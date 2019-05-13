<template>
  <div class="recipes">
    <Header />
    <div class="container" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Todas las Recetas</a></li>
      </ol>
    </div>
    <Recipes />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Recipes from "@/components/Recipes.vue";

export default {
  name: "recipes",
  components: {
    Header,
    Recipes
  }
};
</script>
