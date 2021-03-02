<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/base/Footer.vue";

export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  components: {
    Footer,
  },
};
</script>
<style>
@import url("./assets/css/app.css"); 
@import url("./assets/css/sidebar.css");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
</style>