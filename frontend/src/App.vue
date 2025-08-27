<script>
import NavBar from '@/components/navegacion/NavBar.vue';
import Footer from '@/components/navegacion/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
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
    <Footer />
  </div>

</template>

<style lang="scss">
@import "@/scss/_colors.scss";

#main {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  background-color: $bg-default;
  color: $text-primary;
}
</style>
