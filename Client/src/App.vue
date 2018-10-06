<template>
  <div id="app">
    <div>
    <Navbar ></Navbar>
    <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './../partials/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 }
</style>
