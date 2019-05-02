<template>
  <div class="add-program">
    <h4>Crear Workout</h4>
    <form @submit.prevent="addProgram(program)"> 
      <div class="form-block">
        <label for="program-name">Programa: </label>
        <input id="program-name" type="text" v-model="program.name" />
      </div>
      <div class="form-block">
        <label for="program-level">Nivel: </label>
        <input id="program-level" type="text" v-model="program.level" />
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
import { mapState, mapActions } from 'vuex';
export default {
  name: "Add",
  data() {
    return {
      program: {
        name: "",
        level: "",
        active: true,
        date: this.getDate()
      },
    }
  },
  methods: {
    ...mapActions(["addProgram"]),
    getDate() {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      return today;
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
