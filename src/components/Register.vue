<template>
  <div class="register">
    <h1>Registro de usuarios</h1>
    <form @submit.prevent="createUser({email: email, password: password})">
      <input type="email" v-model="email">
      <input type="password" v-model="password">
      <input type="password" v-model="repassword">
      <button type="submit" :disabled="!disable">Crear usuario</button>
    </form>
    <div class="error">
      <h3>Error!</h3>
      <p>{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repassword: ""
    }
  },
  methods: {
    ...mapActions(['createUser'])
  },
  computed: {
    ...mapState(['error']),
    disable() {
      return this.password === this.repassword
        && this.password != ''    
    }
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
