<template>
  <div class="free">
    <ul class="list-group mt-2" v-for="program of programs" :key="program.id">
      <li class="list-group-item">
        <div class="float-left">
          <p>{{program.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "Free",
  programs: {},
  computed: {
    programs() {
      return this.$store.getters.programs;
    }
  },
  methods: {
    loadData() {
      this.$store.dispatch("getData");
    }
  },
  created() {
    this.loadData();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.free {

}
</style>
