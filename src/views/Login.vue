<template>
  <div class="login">
    <router-link :to="{name: 'free'}">
      Workouts
    </router-link>
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
