<template>
  <div class="free">
    <router-link :to="{name: 'login'}">
      Login
    </router-link>
    <Workouts />
  </div>
</template>

<script>
import Workouts from "@/components/Workouts.vue";
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: "free",
  components: {
    Workouts
  }
};
</script>
