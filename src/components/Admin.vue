<template>
  <div class="admin">
    <div class="admin-section mt-3 mb-3">
      <h4>Administración de Workouts</h4>
      <p>En este modulo podrás administrar los workouts y asignarlos a los 
        usuarios, modificar datos del workout, activarlos y desactivarlos.
      </p>
      <div class="admin-section-body mt-3">
        <router-link :to="{name: 'add'}">
          <button class="btn btn-success btn-block">Crear Workout</button>
        </router-link>
        <ul class="list-group mt-2" v-for="program of programs" :key="program.id">
          <li class="list-group-item">
            <div class="float-left">
              <p>{{program.name}}</p>
            </div>
            <div class="float-right">
              <router-link :to="{name: 'edit', params: {id: program.id}}">
                <button class="btn btn-success mr-2">Editar</button>
              </router-link>
              <button class="btn btn-danger" @click="deleteProgram(program.id)">Eliminar</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
   <hr>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import Workouts from "@/components/Workouts.vue";

export default {
  name: "Admin",
  components: {
    Workouts
  },
  computed: {
    programs() {
      return this.$store.getters.programs;
    },
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    loadData() {
      this.$store.dispatch("getData");
    },
    loadUsers() {
      this.$store.dispatch("getUsers");
    }
  },
  created() {
    this.loadData();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.admin {
 
}
</style>
