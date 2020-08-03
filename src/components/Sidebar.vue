<template>
  <div class="sidebar">
<div class="section-header">
  Sort
</div>
    <md-divider></md-divider>

    <md-button class="sectionbtn"> New</md-button>
    <md-divider></md-divider>

    <md-button> Popular</md-button>
    <md-divider></md-divider>

    <div class="section-header">
      Most Visited
    </div>
    <md-divider></md-divider>

    <md-list>
      <md-list-item>
        <md-icon>help</md-icon>
        <md-button class="md-list-item-text">Loading Group Name...</md-button>
      </md-list-item>

      <md-list-item>
        <md-icon>help</md-icon>
        <md-button class="md-list-item-text">Loading Group Name...</md-button>
      </md-list-item>
      <md-list-item>
        <md-icon>help</md-icon>
        <md-button class="md-list-item-text">Loading Group Name...</md-button>
      </md-list-item>
    </md-list>
    <md-divider></md-divider>
    <div class="section-header">
      Groups
    </div>
    <md-divider></md-divider>
    <md-field class="searchbar">
      <label>Group name or Topic</label>
      <md-input v-model="voice"></md-input>
      <md-icon>search</md-icon>
    </md-field>
    <md-list>
      <md-list-item>
        <md-icon>help</md-icon>
        <md-button class="md-list-item-text">Loading Group Name...</md-button>
      </md-list-item>
    <md-list-item>
      <md-icon>help</md-icon>
      <md-button class="md-list-item-text">Loading Group Name...</md-button>
    </md-list-item>
    </md-list>
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
    width: 20vw;
    background: white;
    cursor: pointer;
    justify-content: left;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
  }
  .searchbar{
    margin: 5%;
    width: 90%;
  }
.section-header{
  height: 38px;
  background: linear-gradient(to right, lightblue 25%, darkblue 75%);
  padding: 10px 10px 0px 25px;
  font-weight: bolder;
  font-size: 1rem;
  text-align: left;
}
  .md-button .md-ripple{
    justify-content: left!important;
  }
  .md-list-item{
    padding-left: 5%;
  }
  .md-list-item-text{
    text-align: left;

  }
</style>
