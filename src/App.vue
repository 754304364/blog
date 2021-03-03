<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style>
@import url(./assets/css/all.css);

</style>

<script>
import Header from './components/Header'

export default{
  components:{
    Header
  },
  created(){
    // this.$store.state.signing = window.localStorage.signing
    // this.$store.state.username = window.localStorage.username
  }
}
</script>