<template>
  <div id="app">
    <notifications group="notify" />
    <Header></Header>
    <router-view />
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="css">
</style>
