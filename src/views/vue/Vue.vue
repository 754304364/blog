<template>
    <Blogtxt :cpagetype="pagetype"></Blogtxt>
</template>

<script>
import Blogtxt from '../../components/blogtxt/Blogtxt'
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

