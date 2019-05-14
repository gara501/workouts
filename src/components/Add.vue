<template>
  <div class="add-program">
    <h4>Crear Workout</h4>
    <form @submit.prevent="addProgram(program)"> 
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="program-name">Programa: </label>
          <input id="program-name" type="text" class="form-control" v-model="program.name" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="program-active">Nivel: </label>
           <select id="program-active" class="form-control" v-model="program.level">
            <option>Escoja...</option>
            <option selected value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="program-phase">Fases: </label>
          <input id="program-phase" type="number" class="form-control" v-model="program.phases" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="program-category">Programa gratis: </label>
          <input id="program-category" type="checkbox" class="form-control" v-model="program.free" v-bind:value=true>
        </div>
      </div>
       <div class="form-row" v-if="!program.free">
        <div class="form-group col-md-12">
          <label for="program-owner">Cliente al cual quiere asignar este programa: </label>
           <select id="program-owner" class="form-control" v-model="program.owner">
            <option>Seleccione Usuario</option>
            <option selected :value="user.id" v-for="user of users" :key="user.id">{{user.fullname}}</option>
          </select>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: "Add",
  data() {
    return {
      program: {
        name: "",
        level: "",
        owner: "",
        phases: "",
        free: false,
        active: true,
        date: this.getDate()
      }
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    loadUsers() {
      this.$store.dispatch("getUsers");
    },
    ...mapActions(["addProgram"]),
    getDate() {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      return today;
    }
  },
  created(){
    this.loadUsers()
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-program {
 
}
</style>
