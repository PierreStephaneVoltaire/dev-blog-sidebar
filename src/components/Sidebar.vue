<template>
  <div class="sidebar">

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
export default class Sidebar extends Vue {
    @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .sidebar {
    min-height: 90vh;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
    background: white;
    cursor: pointer;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  }

</style>
