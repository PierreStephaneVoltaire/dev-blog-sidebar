<template>
  <div class="sidebar">

    <md-divider></md-divider>

    <md-button class="sectionbtn"> New</md-button>
    <md-divider></md-divider>

    <md-button> Popular</md-button>
    <md-divider></md-divider>

    <md-button> Most Visited</md-button>
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
    <md-button> Groups</md-button>
    <md-divider></md-divider>
    <md-field>
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

  .md-button .md-ripple{
    justify-content: left!important;
  }
  .md-list-item-text{
    text-align: left;

  }
</style>
