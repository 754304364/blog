<template>
  <div class="flex">
    <Blogtxt :cpagetype="pagetype"></Blogtxt>
  </div>
</template>

<script>
import Blogtxt from '../../components/blogtxt/Blogtxt'
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