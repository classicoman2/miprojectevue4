<template>
  <div class="helloworld">
    <h2>Component HelloWorld</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.helloworld {
  background-color: cadetblue;
}

</style>
