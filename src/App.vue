<template>
  <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700;900&display=swap');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}

/* route transition */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
