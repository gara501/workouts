<template>
  <div class="biohacking">
    <Header />
    <Bio />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Bio from "@/components/Bio.vue";

export default {
  name: "Biohacking",
  components: {
    Header,
    Bio
  }
};
</script>
