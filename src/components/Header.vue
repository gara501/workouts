<template>
  <div class="header">
     <nav class="navbar navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo_eagle.png" width="30" height="30" class="d-inline-block align-top" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{name: 'home'}">Workouts</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'add'}">Crear</router-link>
          </li>
          <li class="nav-item">
            <a @click="logoutUser">Logout</a>
          </li>
        </ul>
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
    ...mapState(['user']),
    ...mapGetters(['userExists'])
  }, 
  methods: {
    ...mapActions(['logoutUser'])
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
}
</style>
