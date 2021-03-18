<template>
  <div>
      <div class="user-information">
        <span class="user-infor">用户名</span> 
        <span v-html="this.$store.state.user[0].username"></span>
      </div>
      <div class="user-information">
        <span class="user-infor">性别</span>
        <span v-html="this.$store.state.user[0].sex"></span>
      </div>
      <div class="user-information">
        <span class="user-infor">简介</span>
        <span v-html="synopsis" ref="synopsis"></span>
      </div>
  </div>
</template>

<script>
export default {
name:"Userdata",
data(){
  return{
    synopsis:'填写简介更容易获得关注哦！'
  }
},
mounted(){
  if(this.$store.state.user[0].synopsis){
    this.synopsis = this.$store.state.user[0].synopsis
  }
}
}
</script>

<style>
.user-information{
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin: 0 auto;
  text-align: left;
}
.user-infor{
  color: darkgrey;
  display: inline-block;
  width: 70px;
}
</style>