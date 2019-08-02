<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <to-do-list-component />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDoListComponent from './components/ToDoListCompnent'
import store from './store'
export default {
  name: 'app',
  components: {
    HelloWorld,
    ToDoListComponent
  },
  store
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
