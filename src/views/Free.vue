<template>
  <div class="free">
    <Header />
    <Free />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Free from "@/components/Free.vue";

export default {
  name: "free",
  components: {
    Header,
    Free
  }
};
</script>
