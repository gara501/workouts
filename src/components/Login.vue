<template>
  <div class="login">
    <div class="card">
      <img src="@/assets/logo_eagle.png" class="logo" alt="logo">
      <div class="card-title">
        <h2>S4F Workouts - Login</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="loginUser({email: email, pass: pass})">
          <div class="form-group">
<<<<<<< HEAD
            <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">No vamos a compartir tu email con nadie.</small>
          </div>
          <div class="form-group">
            <input type="password" v-model="pass" class="form-control" id="pass" aria-describedby="passwordHelp" placeholder="Password">
          </div>
          <button id="submitLogin" type="submit" class="btn btn-primary btn-lg btn-block" :disabled="!disable">Login</button>
          <small id="submitLogin" class="form-text text-muted">Al ingresar, aceptas los terminos y condiciones de soul4Fit.</small>
=======
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese email">
            <small id="emailHelp" class="form-text text-muted">No vamos a compartir tu email con nadie.</small>
          </div>
          <div class="form-group">
            <label for="pass">Password</label>
            <input type="password" v-model="pass" class="form-control" id="pass" aria-describedby="passwordHelp" placeholder="Ingrese Password">
          </div>
          <button type="submit" :disabled="!disable">Login</button>
>>>>>>> 1e331b68bbfdcce4f58c7a6b6ed6dc9f477246d0
        </form>
        <p class="alert alert-danger mt-5" v-if="error.message">{{ error.message }}</p>
      </div>
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
.login {
<<<<<<< HEAD
  font-family: 'Quicksand', sans-serif;

=======
>>>>>>> 1e331b68bbfdcce4f58c7a6b6ed6dc9f477246d0
  .logo {
    margin: 30px auto;
    width: 100px;
  }
}
</style>
