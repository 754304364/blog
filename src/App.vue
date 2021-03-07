<template>
  <div id="app">
    <Header/>
    <router-view class="mt70"/>
    <foot></foot>
  </div>
</template>

<style>
@import url(./assets/css/all.css);

@media screen and (max-width:480px){
.mt70{
  margin-top: 70px;
}
}
</style>

<script>
import Header from './components/tabbar/Header'
import foot from './components/footer/footer'
export default{
  components:{
    Header,
    foot
  },
  created(){
    // this.$store.state.signing = window.localStorage.signing
    // this.$store.state.username = window.localStorage.username
  },
}
</script>