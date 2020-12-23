<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MenuList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuList from '@/components/MenuList.vue'

export default {
  name: 'Home',
  components: {
    MenuList
  }
}
</script>
