<template>
  <div class="edit">
    <Header msg="Welcome to Your Vue.js App" />
    <Edit />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Edit from "@/components/Edit.vue";

export default {
  name: "edit",
  components: {
    Header,
    Edit
  }
};
</script>
