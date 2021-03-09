<template>
      <blogchild :cpagetype="pagetype" :cid='pageid'></blogchild>
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