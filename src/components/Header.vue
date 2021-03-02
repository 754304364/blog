<template>
  <div>
      <div class="header">
            <div class="top-item-show" @click="topItemShow()">
                    <img class="top-item-show-img" :class="{opacity:opacity}" src="../../public/img/btnShow.svg" width="30px" height="30px">
                    <img class="top-item-show-img" :class="{opacity:opacity2}" src="../../public/img/btnNone.svg" width="30px" height="30px">
            </div>
            <div class="top-nav">
                <ul>
                    <router-link to="/home" class="top-item" tag="li">首页</router-link> 
                    <router-link to="/css" class="top-item" tag="li">CSS</router-link> 
                    <router-link to="/js" class="top-item" tag="li">JavaScript</router-link> 
                    <router-link to="/vue" class="top-item" tag="li">Vue</router-link> 
                </ul>
            </div>
            <div class="head-portrait">
                <div @click="loginOrsign">
                    <img v-if="$store.state.signing" src="../../public/img/head-portrait.jpg" alt="">
                    <div v-else class="signing" >
                      登录
                    </div>
                </div>
                <!-- <router-link :to=this.$store.state.username></router-link> -->
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
          document.getElementsByClassName("top-nav")[0].style.left = 0
          document.getElementsByClassName("top-item-show")[0].style.left='50%'
          this.opacity = !this.opacity
          this.opacity2 = !this.opacity2
          this.topNavDisplay = !this.topNavDisplay
        }else{
          document.getElementsByClassName("top-nav")[0].style.left = "-50%"
          document.getElementsByClassName("top-item-show")[0].style.left= "20px"
          this.opacity = !this.opacity
          this.opacity2 = !this.opacity2
          this.topNavDisplay = !this.topNavDisplay
        }
      },
      loginOrsign(){
        if(this.$store.state.signing == false){
          this.$router.push('/login').catch(ery =>ery)
        }else{
          this.$router.push('/'+this.$store.state.username).catch(ery =>ery)
        }
         
      }
    }
}
</script>

<style>
.router-link-active{
  color: #ff6700;
}
.header{
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 1px 1px rgba(1, 1, 1, .1);
}
.header:after{
  display:table;
  content: "";
  clear: both;
}
.top-item-show{
  display: none;
  position: fixed;
  height: 30px;
  width: 30px;
  top: 20px;
  left:20px;
  transition: all .5s;
}
.top-item-show-img{
  position: absolute;
  transition: all .5s;
}
.opacity{
  opacity: 0;
}
.top-nav{
  padding-top: 10px;
  position: absolute;
  height: 40px;
  text-align: center;
  margin-left: 30%;
}

.top-nav ul::after{
  display: table;
  content: "";
  clear: both;
}
.top-item{
  display: block;
  float: left;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100px;
  cursor: pointer;
}
@media screen and (max-width:480px){
  .top-item-show{
   display: block;
}
  .top-nav{
    width: 50%;
    height: 100%;
    left: -50%;
    background: #f8f9fa;
    padding-top: 10%;
    margin-left: 0;
    transition: all .5s;
  }
  .top-item{
    width: 100%;
  }
}

.head-portrait{
  position: relative;
  top: 0px;
  float: right;
  right: 0;
  margin-right: 5%;
  cursor: pointer;
}

.head-portrait img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.signing{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f6f6f6;
  text-align: center;
  line-height: 60px;
  color: blue;
}
.signing:hover{
  color: red;
}
</style>