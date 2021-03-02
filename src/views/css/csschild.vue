<template>
  <div class="flex">
      <blogchild :cpagetype="pagetype" :cid='pageid'></blogchild>
  </div>
</template>

<script>
import blogchild from '../../components/blogchild/blogchild'
export default {
name:"Vuechild",
data(){
  return{
    pagetype:"cssid",
    pageid:null
  }
},
components:{
blogchild
},
created(){
  this.pageid =this.$route.query.pageid
}
}
</script>

<style>

</style>