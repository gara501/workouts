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
          <label for="program-level">Nivel: </label>
          <input id="program-level" type="text" class="form-control" v-model="program.level" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="program-active">Activo: </label>
           <select id="program-active" class="form-control" v-model="program.active">
            <option>Choose...</option>
            <option selected value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
      
      <button class="btn btn-primary" type="submit">Guardar</button>
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
