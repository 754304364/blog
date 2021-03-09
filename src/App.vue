<template>
  <div id="app">
    <Header/>
    <news></news>
  </div>
</template>

<style>
@import url(./assets/css/all.css);
#app{
  margin: 0 auto;
}
</style>

<script>
import news from './components/new/new'
import Header from './components/tabbar/Header'
export default{
  data(){
    return{
      time:0,
    }
  },
  components:{
    Header,
    news
  },
  beforeCreate(){
    window.onload = ()=>{
      this.time = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
      this.$store.commit('loadingTime',this.time)
    }
    this.$nextTick(()=>{
      this.$store.commit('loadingTime',this.time)
    })
  },
  created(){
    
  },
  
}
 
</script>