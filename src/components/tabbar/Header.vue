<template>
  
      <div class="header">
            <div class="top-item-show" @click="topItemShow()">
                    <img class="top-item-show-img" :class="{opacity:opacity}" src="../../../public/img/btnShow.svg" width="30px" height="30px">
                    <img class="top-item-show-img" :class="{opacity:opacity2}" src="../../../public/img/btnNone.svg" width="30px" height="30px">
            </div>
            <div class="top-nav">
                <ul>
                    <router-link to="/home" class="top-item" tag="li">首页</router-link> 
                    <router-link to="/js" class="top-item" tag="li">JS</router-link> 
                    <router-link to="/css" class="top-item" tag="li">CSS</router-link> 
                    <router-link to="/vue" class="top-item" tag="li">Vue</router-link> 
                </ul>
            </div>
            <div class="head-portrait">
                <div @click="loginOrsign">
                    <img v-if="$store.state.isLogin" src="../../../public/img/head-portrait.jpg">
                    <div v-else class="signing" >
                      登录
                    </div>
                </div>
            </div>
      </div>
  
</template>

<script>
export default {
    name:'Header',
    data(){
      return{
        topNavDisplay:true,
        opacity:false,
        opacity2:true
      }
    },
    methods:{
      topItemShow(){
        if(this.topNavDisplay){
          document.getElementById('app').style.transform = 'translate(50%,0px)'
          this.opacity = !this.opacity
          this.opacity2 = !this.opacity2
          this.topNavDisplay = !this.topNavDisplay
        }else{
          document.getElementById('app').style.transform = 'translate(0px,0px)'
          this.opacity = !this.opacity
          this.opacity2 = !this.opacity2
          this.topNavDisplay = !this.topNavDisplay
        }
      },
      loginOrsign(){
        if(this.$store.state.isLogin == false){
          this.$router.push('/login').catch(ery =>ery)
        }else{
          this.$router.push('/user/'+this.$store.state.username).catch(ery =>ery)
        }
         
      }
    }
}
</script>

<style>
@import url(Header.css);
</style>