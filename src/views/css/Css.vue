<template>
    <Blogtxt :cpagetype="pagetype"></Blogtxt>
</template>

<script>
import Blogtxt from '../../components/blogtxt/Blogtxt'
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
