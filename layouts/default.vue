<template>
  <div class="layout">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt class="page" />
  </div>
</template>

<script>
export default {
  // middleware: 'log',
  data() {
    return {
      displaySidenav: false
    }
  },
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: auto;
  max-width: 1920px;
}

</style>
