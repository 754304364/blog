<template>
<div>
    <div class="blog-child">
      <h1 class="blog-child-name">
          {{childData[0]}}
      </h1>
      <div class="blog-child-time">
          {{childData[2]}}&nbsp;&nbsp;发布
      </div>
      <div class="blog-child-txt">
      </div>
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
            this.childData.push(res.data[0].title,res.data[0].txt,res.data[0].time)
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

<style scoped>
.blog-child{
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
}
.blog-child-name{
    text-align: center;
}
.blog-child-time{
    margin: 20px 0;
    color: #ff6700;
}
.blog-child-txt{
word-wrap:break-word;
}
</style>