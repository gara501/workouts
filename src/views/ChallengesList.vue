<template>
  <div class="challenges">
    <Header />
    <Challenges />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Challenges from "@/components/Challenges.vue";

export default {
  name: "ChallengesList",
  components: {
    Header,
    Challenges
  }
};
</script>
