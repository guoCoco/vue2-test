<template>
  <div id="app">
    <h2>test docker</h2>
    <div class="images" v-viewer>
       <img src="./assets/logo.png" alt="">
      <img src="./assets/logo.png" alt="">
    </div>
    <viewer :images="images">
      <img v-for="(src, i) in images" :src="src" :key="i">
    </viewer>
  </div>
</template>

<script>
import imgSrc from './assets/logo.png'
export default {
  name: 'App',
  data() {
      return {
        images: [imgSrc, imgSrc]
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
