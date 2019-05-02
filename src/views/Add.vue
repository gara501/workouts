<template>
  <div class="add">
    <Header msg="Welcome to Your Vue.js App" />
    <Add />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Add from "@/components/Add.vue";

export default {
  name: "add",
  components: {
    Header,
    Add
  }
};
</script>
