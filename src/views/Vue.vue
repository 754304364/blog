<template>
  <div class="flex">
    <Blogtxt :cpagetype="pagetype"></Blogtxt>
  </div>
</template>

<script>
import Blogtxt from '../components/blogtxt/Blogtxt'
export default{
  name:"Vues",
  data(){
    return{
      pagetype:"vue"
    }
  },
  components:{
    Blogtxt
  },
}
</script>

