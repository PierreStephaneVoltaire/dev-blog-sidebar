<template>
  <div id="app">
<Sidebar></Sidebar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sidebar from './components/Sidebar.vue'

@Component({
  components: {
    Sidebar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
z-index: 2;
  margin-top: 60px;
  position: fixed;

}
</style>
