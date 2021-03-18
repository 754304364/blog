<template>
<div>
   <div class="container">
      <div class="user-img">
        <img :src="this.$store.state.user[0].img" alt="" @mouseenter="shows()">
        <a v-show="show"  @mouseleave="leave()" @click="changeImg()">更换头像</a>
      </div>
      <div class="user-item">
        <router-link :to="'/user/'+this.$store.state.username+'/userdata'" class="userItem">个人资料</router-link>
        <router-link :to="'/user/'+this.$store.state.username+'/publish'"   class="userItem">发布博客</router-link>
      </div>
      <router-view/>
  </div>
</div>
 
</template>

<script>
export default {
name:"User",
data(){
  return{
    show:false
  }
},
methods:{
  shows(){
    this.show = true
  },
  leave(){
    this.show = false
  },
  changeImg(){

  }
}
}
</script>

<style>
.user-img{
  width: 100%;
  height: 150px;
  background: url('http://www.res.goomee.top/img/1.webp');
  background-size: cover;
  float: left;
  margin-bottom: 10px;
}
.user-img img{
  height: 70px;
  width: 70px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 60px;
}
.user-img a{
  position: absolute;
  margin-left: -70px;
  font-size: 12px;
  margin-top: 60px;
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: rgba(0,0,0,.6);
}
.userItem{
  color: red;
  margin-left: 20px;
}
.user-item{
  padding: 20px;
  text-align: center;
}
.publish-btn{
  margin: 40px auto;
  color: red;
  width: 100px;
  height: 50px;
}
.user-data{
  text-align: center;
}
</style>