<template>
  <div>
    <Search></Search>
    <Footer></Footer>
  </div>
</template>

<script>

import Search from './components/Search.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer, Search
  }
}
</script>

<style lang="scss">

#app {

}
</style>
