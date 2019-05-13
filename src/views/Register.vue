<template>
  <div class="register">
    <Header />
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Register from "@/components/Register.vue";

export default {
  name: "register",
  components: {
    Header,
    Register
  }
};
</script>
