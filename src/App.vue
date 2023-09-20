<template>
  <!-- Navigationsmenü -->
  <NavBar />
  <div class="content">
    <!-- Dynamische Einbindung der Seiten -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
* {
  margin: 0;
}

.content {
  padding: 1em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
