<template>
  <div class="login">
     <form @submit.prevent="loginUser({email: email, pass: pass})">
      <input type="email" v-model="email">
      <input type="password" v-model="pass">
      <button type="submit" :disabled="!disable">Login</button>
    </form>
    <div class="error">
      <p>{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pass: ""
    }
  },
  methods: {
    ...mapActions(['loginUser'])
  },
  computed: {
    ...mapState(['error']),
    disable() {
      return this.email !== '' && this.pass !== ''
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
