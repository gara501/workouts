<template>
  <div class="bio">
    <ul class="list-group mt-2" v-for="program of programsfs" :key="program.id">
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
  name: "Bio",
  computed: {
    ...mapState(['programsfs'])
  },
  methods: {
    ...mapActions(['getData'])
  },
  created() {
    this.getData();
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bio {

}
</style>
