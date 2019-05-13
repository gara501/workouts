<template>
  <div class="login">
    <Header />  
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Login from "@/components/Login.vue";

export default {
  name: "login",
  components: {
    Header,
    Login
  }
};
</script>
