<template>
  <div id="app">
    <label for="dd">
    <input type="file" id="dd" accept="image/*" style="display:none">
    <img src="./assets/timg.jpg" alt="">
    </label>
  </div>
</template> 

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
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
img{
  width: 100px;
  height: 100px;
}
</style>
