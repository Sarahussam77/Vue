<template>
  <!-- <FormComp/> -->
<navBar v-if="!$route.meta.hideNavbar"></navBar>
    <router-view></router-view>
</template>

<script>

// import FormComp from './components/Day1/FormComp.vue';
import navBar from './components/Day2/navBar.vue';
export default {
  name: 'App',
  components: {
  // FormComp,
  navBar
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
