<template>
  <div id="app">
    <Header/>
    <news></news>
    <!-- <foot></foot> -->
  </div>
</template>

<style>
@import url(./assets/css/all.css);

</style>

<script>
import news from './components/new/new'
import foot from './components/footer/footer'
import Header from './components/tabbar/Header'
export default{
  data(){
    return{
      time:0,
    }
  },
  components:{
    Header,
    news,
    foot
  },
  beforeCreate(){
    window.onload = ()=>{
      this.time = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
      this.$store.commit('loadingTime',this.time)
    }
    this.$nextTick(()=>{
      this.$store.commit('loadingTime',this.time)
    })
  }
}
 
</script>