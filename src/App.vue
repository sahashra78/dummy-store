<template>
  <NavBar />
  <router-view/>
  <Footer />
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { NavBar, Footer },

  methods:{
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
