<template>
  <div class="userhome">
    <h2>Mi perfil</h2>
    <div class="user-info">
      <div class="user-info-block user-info--data mt-3">
        <ul class="list-group">
          <li class="list-group-item active">Datos personales</li>
          <li class="list-group-item">Nombre: {{userInfo.firstname}}</li>
          <li class="list-group-item">Apellido: {{userInfo.lastname}}</li>
          <li class="list-group-item">Genero: {{userInfo.gender}}</li>
          <li class="list-group-item">Email: {{user.email}}</li>
        </ul>
      </div>
      <div class="user-info-block user-info--bio mt-3">
        <ul class="list-group">
          <li class="list-group-item active">Parametros físicos</li>
          <li class="list-group-item">Peso: {{userBio.weight}}</li>
          <li class="list-group-item">Estatura: {{userBio.height}}</li>
          <li class="list-group-item">% Graso: {{userBio.fat}}</li>
          <li class="list-group-item">BMI: {{userBio.bmi}}</li>
          <li class="list-group-item">Calorias: {{userBio.calories}}</li>
        </ul>
      </div>
    </div>
    <div class="user-programs mt-5">
      <h2>Programas de entrenamiento</h2>
      <ul class="list-group mt-2" v-for="program of programsByUser" :key="program.id">
        <li class="list-group-item">
          <div class="float-left">
            <p>{{program.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Userhome",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['programsByUser', 'user', 'userInfo', 'userBio'])
  },
  methods: {
    ...mapActions(['getProgramsUser', 'getUserInfo', 'getUserBio'])
  },
  created() {
    this.getProgramsUser(this.id);
    this.getUserInfo(this.id);
    this.getUserBio(this.id);
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userhome {
  .user-info {
    display: flex;
    flex-flow: row;
    
    .user-info-block {
      flex: 1;
      
      &:first-child {
        margin-right: 10px;
      }
    }
    
  }
}
</style>
