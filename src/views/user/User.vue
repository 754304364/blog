<template>
  <div class="container">
    <div>
      <router-link :to="this.$store.state.username+'/userdate'" class="userItem">个人资料</router-link>
      <!-- <button class="publish-btn" @click="publishBtn">发表文章</button> -->
      <router-link :to="this.$store.state.username+'/publish'"   class="userItem">发布博客</router-link>
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
},
methods:{
  publishBtn(){
    this.$router.push(this.$store.state.username+"/publish")
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
  width: 100%;
  margin:0 auto;
  text-align: center;
}
.publish-btn{
  margin: 40px auto;
  color: red;
  width: 100px;
  height: 50px;
}
</style>