<template>
  <div class="flex flexhome">
      <div class="home-left">
          <div class="header-img">
              <img src="../../../public/img/head-portrait.jpg" alt="">
          </div>
      </div>
      <router-view class="home-center"></router-view>
      <div class="home-right">
          <div class="home-right-mes">博客信息</div>
          <ul class="home-right-ul">
             <li class="home-right-li">文章数目<span>{{arrLength}}</span></li>
             <li class="home-right-li">评论数目<span>xx条</span></li>
             <li class="home-right-li">感谢陪伴<span>xx天</span></li>
             <li class="home-right-li">加载耗时<span>{{this.$store.state.loadingTime}}ms</span></li>
          </ul>
      </div>
  </div>
</template>

<script>
import {reSelect} from '../axiosRequest/axiosRequest'
export default {
name:'news',
data(){
    return{
        arrLength:0,
    }
},
created(){
    reSelect({ 
        method:'get',
        url:'/blogLength'
    }).then( res => {
        this.arrLength = res.data.length
    }).catch( err => {
        console.log(err);
    })
}
}
</script>

<style>
@import url(new.css);

</style>