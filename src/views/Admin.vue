<template>
  <div class="admin">
    <Header />
    <Admin />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Admin from "@/components/Admin.vue";

export default {
  name: "admin",
  components: {
    Header,
    Admin
  }
};
</script>
