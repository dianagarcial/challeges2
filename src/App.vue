<template>
  <RouterView />
  <NavBar></NavBar>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {

    NavBar
}
}
</script>

<style>
  h1{
    margin-top: 5em;
  }

</style>
