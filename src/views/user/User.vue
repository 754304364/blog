<template>
  <div class="container">
    <div class="user-item">
      <router-link :to="'/'+this.$store.state.username+'/userdata'" class="userItem">个人资料</router-link>
      <router-link :to="'/'+this.$store.state.username+'/publish'"   class="userItem">发布博客</router-link>
    </div>
      <router-view/>
  </div>
</template>

<script>
export default {
name:"User",
data(){
  return{
  }
}
}
</script>

<style>
.userItem{
  color: red;
  margin-left: 20px;
}
.container{
  text-align: center;
}
.user-item{
  padding: 20px;
}
.publish-btn{
  margin: 40px auto;
  color: red;
  width: 100px;
  height: 50px;
}
</style>