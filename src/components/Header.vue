<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo_eagle.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-if="userLoaded">
            <router-link class="nav-link" :to="{name: 'dashboard', params: {id: user.uid }}">Mis Perfil</router-link>
          </li>
          <li class="nav-item active" v-if="!userLoaded">
            <router-link class="nav-link" :to="{name: 'free'}">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'bio'}">Biohacking</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'challenges'}">Retos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'recipes'}">Recetas</router-link>
          </li>
          <li class="nav-item" v-if="!userLoaded">
            <router-link class="nav-link" :to="{name: 'login'}">Miembros</router-link>
          </li>
          
        </ul>
        <div class="my-2 my-lg-0" v-if="userLoaded">
          <a class="mr-sm-2 logout" @click="logoutUser">Logout</a>
        </div>
      </div>
    </nav> 
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Workouts from "@/components/Workouts.vue";
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: "header",
  components: {
    Header,
    Workouts
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userLoaded() {
      return this.$store.getters.userExists;
    }
  }, 
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
   font-family: 'Quicksand', sans-serif;

  .logo {
    margin: 30px auto;
    width: 100px;
  }

  .logout{
    color: red;
    cursor: pointer;
  }
}
</style>
