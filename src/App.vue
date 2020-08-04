<template>
  <div id="sidebar">
    <component :is="dynamicComponent"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import routes from '@/router'

  @Component
export default class App extends Vue {
  get dynamicComponent () {
    const comp = routes.find((route) => {
      return route.path.length !== 1 && window.location.pathname.substr(0, route.path.length) === route.path
    })
    return comp ? comp.component : routes[0].component
  }
}
</script>

<style lang="scss">
  #sidebar {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
