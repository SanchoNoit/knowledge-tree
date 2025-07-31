<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<template>
  <div id="navbar">
    <NavBar />
  </div>
  <div id="main" class="container-fluid py-1">
    <router-view />
  </div>
  <div id="footer">

  </div>

</template>

<style scoped>
#main {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  background-color: #c518f5;
  color: #18f5a5;
}
</style>
