<template>
    <Blogtxt :cpagetype="pagetype"></Blogtxt>
</template>

<script>
import Blogtxt from '../components/blogtxt/Blogtxt'
export default{
  name:"Js",
  data(){
    return{
      pagetype:"js"
    }
  },
  components:{
    Blogtxt
  },
}

</script>

<style>

</style>