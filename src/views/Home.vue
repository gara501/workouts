<template>
  <div class="home">
    <Header/>
    <Workouts />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Workouts from "@/components/Workouts.vue";
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: "home",
  components: {
    Header,
    Workouts
  }
};
</script>
