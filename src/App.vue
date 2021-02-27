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
  }
}
</script>