<template>
  <div class="blog-child">
      <div class="blog-child-name">
          {{childData[0]}}
      </div>
      <div class="blog-child-txt">
      </div>
      <div>
          {{childData[2]}}
      </div>
  </div>
</template>

<script>
export default {
name:"blogchild",
data(){
    return{
        childData:[],
    }
},
props:['cpagetype','cid'],
created(){
    console.log(1);
    this.$axios({ 
                method:'post',
                url: 'http://127.0.0.1:3000/api/user/select'+this.cpagetype,
                data:{
                    id:this.cid
                }
              }).then( res => {
                  console.log("成功了");
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