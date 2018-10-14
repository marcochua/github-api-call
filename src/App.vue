<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title v-text="this.$store.state.title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <div class="center"><router-link :to="{ name: 'home'}">Home</router-link></div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Home'
      }],
      miniVariant: false,
      rightDrawer: false
    }
  }
}
</script>

<style>
  div.center {
    width: 100%;
    text-align: center;
  }
</style>
