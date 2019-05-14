<template>
  <div class="edit-programs">
    <h4>Edición de workouts</h4>
    <form @submit.prevent="editProgram(program)"> 
      <div class="form-block">
        <label for="program-name">Programa: </label>
        <input id="program-name" type="text" v-model="program.name" />
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
      <div class="form-block">
        <label for="program-active">Activo: </label>
        <input id="program-active" type="text" v-model="program.active" />
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  name: "Edit",
  data() {
    return {
      id: this.$route.params.id
    }
  }, 
  methods: {
    getProgram() {
      this.$store.dispatch("getProgram", this.id);
    },
    editProgram() {
      this.$store.dispatch("editProgram", this.id);
    }
  },
  created(){
    this.getProgram(this.id)
  },
  computed: {
    program() {
      return this.$store.getters.program;
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
