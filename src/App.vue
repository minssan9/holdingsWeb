<template>
  <div id="app">
    <!-- <Navbar />  -->
    <!-- <HelloWorld msg="Hello~~~~~~~~~" /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
    // import HelloWorld from "./components/HelloWorld.vue";
    // import Navbar from './components/base/Navbar.vue'
    import Footer from './components/base/Footer.vue'

    export default {
    data () {
      return {}
    },
        components: {
            // HelloWorld,
            // Navbar,
            Footer
        }
    }
</script>