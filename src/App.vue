<template>
  <div id="app">
    <!-- <Navbar /> -->

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
// import Navbar from "@/components/base/Navbar.vue";
import Footer from "@/components/base/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    // HelloWorld,
    // Navbar,
    Footer,
  },
};
</script>

<style>
@import url("./assets/css/app.css");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
</style>
