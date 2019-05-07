<template>
  <div class="login">
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
            <router-link class="nav-link active" :to="{name: 'free'}">
              Programas Gratis
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{name: 'free'}">
              Blog
            </router-link>
          </li>
        </ul>
      </div>
    </nav>    
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
