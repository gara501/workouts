<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="logo" />
    <ul id="nav">
      <li>
        <router-link :to="{name: 'home'}">Workouts</router-link>
      </li>
      <li>
        <router-link :to="{name: 'add'}">Crear</router-link>
      </li>
      <li>
        <p>Welcome: {{user.email}}</p>
      </li>
      <li>
        <a @click="logoutUser">Logout</a>
      </li>
    </ul>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
