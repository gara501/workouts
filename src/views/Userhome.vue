<template>
  <div class="userhome">
    <Header />
    <div class="container mt-5">
      <Userhome />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Userhome from "@/components/Userhome.vue";
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: "userhome",
  components: {
    Header,
    Userhome
  }
};
</script>
