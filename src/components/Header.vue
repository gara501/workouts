<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="logo" />
    <ul>
      <li><a href="#">Workouts</a></li>
      <li><a href="#">About</a></li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
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
