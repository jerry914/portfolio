<template lang="pug">
div
    NavBar
    router-view
    .footContainer 
      p jerry.ho@iss.nthu.edu.tw
      p Copyright© Chieh-Jui Ho, 2024
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {NavBar}
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
body {
  margin: 0 !important;
}

.title {
  text-decoration: none;
  font-size: 1.3rem;
  color: #182949;
  font-weight: 800;
  margin: 30px;
  margin-top: 0;
  height: 5vh;
  line-height: 5vh; 
}
.footContainer {
  position: relative;
  bottom: 0;
  background-color: #1E4059;
  width: 100vw;
  height: 100px;
  text-align: center;
  color: white;
  padding-top: 10px; 
}
</style>
