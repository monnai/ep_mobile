<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <van-button>xxx</van-button>-->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { createApp } from 'vue'
// import { Button } from 'vant'
//
// const app = createApp()
// app.use(Button)
export default {
  name: 'App',
  components: {
    HelloWorld
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
