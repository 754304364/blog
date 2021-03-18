<template>
    <div>
      <div class="txt-name" >
      <div v-for="(item,index) in dataTxt" class="textli" :key="index">
        <h3>{{item.title}}</h3>
        <div class="txtContainer" v-html="dataTxt[index].txt">
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import {reSelect}from '../axiosRequest/axiosRequest'
export default {
    name:"Blogtxt",
    data(){
      return{
        dataTxt:null,
        innerHtmls:null,
        container:null,
        blogTxt:[],
        div:[],
      }
    },
    props:["cpagetype"],
     created(){
        reSelect({ 
            method:'get',
            url:'/select'+this.cpagetype
          })
          .then( res => {
            this.dataTxt = res.data
          })
          .catch( err => {
            console.log(err);
          })
  },
  updated(){
    this.$nextTick(()=>{
      this.container = document.getElementsByClassName("txtContainer")
      for(let i=0;i<this.dataTxt.length;i++){
        this.div[i]=document.createElement("div")
        this.div[i].innerHTML = this.blogTxt[i]
        this.container[i].appendChild(this.div[i])
        // 给每个博客分类的首页展示的 博客 添加点击跳转
        this.container[i].onclick=()=>{
          this.$router.push({path:this.cpagetype+"/blog",
                              query:{pageid:this.dataTxt[i].id}})
        }
      }
        })
  }
}
</script>

<style>
.txt-name{
  display: flex;
  justify-content:space-evenly;
  flex-wrap:wrap;
  font-size: 20px;
  color: #ff6700;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  
}
.textli{
  margin-top: 30px;
  height: 300px;
  width: 40%;
  overflow: hidden;
  background-color: #fff;
  padding: 5px 0;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #dedede;
}
.txtContainer{
  width: 100%;
  text-align: left;
  overflow: hidden;
  min-width: 200px;
  min-height: 200px;
  color: #000;
  font-size: 16px;
}
@media screen and (max-width:480px) {
.txt-name{
  width: 90%;
}
.textli{
  height: 200px;
  width: 90%;
}
}
</style>