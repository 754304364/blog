<template>
  <div class="blog-child">
      <div class="blog-child-name">
          {{childData[0]}}
      </div>
      <div>
          {{childData[2]}}
      </div>
      <div class="blog-child-txt">
      </div>
      
  </div>
</template>

<script>
import {reSelect} from '../axiosRequest/axiosRequest'
export default {
name:"blogchild",
data(){
    return{
        childData:[]
    }
},
props:['cpagetype','cid'],
created(){
    reSelect({ 
        method:'post',
        url: '/select'+this.cpagetype,
        data:{
            id:this.cid
        }
        }).then( res => {
            this.childData.push(res.data[0].name,res.data[0].txt,res.data[0].time)
        }).catch( err => {
            console.log(err);
        })
},
updated(){
    this.$nextTick(()=>{
        let div = document.createElement("div")
        let txt = document.getElementsByClassName('blog-child-txt')[0]
        div.innerHTML=this.childData[1]
        txt.appendChild(div)
    })
}    
}
</script>

<style>
.blog-child{
    width: 100%;
}
.blog-child-name{
    text-align: center;
}
.blog-child-txt{

}
</style>