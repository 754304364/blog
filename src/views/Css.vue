<template>
  <div class="flex">
    <Blogtxt :cpagetype="pagetype"></Blogtxt>
  </div>
</template>

<script>
import Blogtxt from '../components/blogtxt/Blogtxt'
export default{
  name:"Css",
  data(){
    return{
      pagetype:"css"
    }
  },
  components:{
    Blogtxt
  },
}
</script>
