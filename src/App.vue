<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      project: "",
      device: "",
      firmware: "",
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
