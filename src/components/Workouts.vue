<template>
  <div class="workouts">
    <h4>Available Workouts</h4>
    <router-link :to="{name: 'add'}">
      <button class="btn btn-success btn-block">Crear Workout</button>
    </router-link>
    <ul class="list-group mt-5" v-for="program of programsfs" :key="program.id">
      <li class="list-group-item">{{program.name}}
        <router-link :to="{name: 'edit', params: {id: program.id}}">
          <button class="btn btn-success">Editar</button>
        </router-link>
        <button class="btn btn-danger" @click="deleteProgram(program.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Workouts",
  computed: {
    ...mapState(['programsfs'])
  },
  methods: {
    ...mapActions(['getData', 'deleteProgram'])
  },
  created() {
    this.getData();
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
