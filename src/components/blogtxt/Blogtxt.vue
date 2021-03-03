<template>
  <div style="width:100%">
      <div class="txt-name" >
      <div v-for="item in dataTxt" class="textli">
        <h3>{{item.name}}</h3>
        <div class="txtContainer">
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
            for(let i=0;i<this.dataTxt.length;i++){
              this.blogTxt.push(this.dataTxt[i].txt)
            }
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
          // this.$router.push(this.cpagetype+"/"+this.dataTxt[i].id)
          this.$router.push({path:this.cpagetype+"/"+this.dataTxt[i].id,
                              query:{pageid:this.dataTxt[i].id} })
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
  cursor: pointer;
}
.textli{
  margin-top: 30px;
  height: 300px;
  width: 40%;
  overflow: hidden;
  background-color: #fff;
  /* border-left: 5px solid #42b983; */
  border-radius: 10px;
}
.txtContainer{
  width: 100%;
  text-align: left;
  overflow: hidden;
  min-width: 200px;
  min-height: 200px;
  color: #000;
  font-size: 16px;
  background-color: rgba(66, 185, 131, .1);
}
@media screen and (max-width:480px) {
.txt-name{
  width: 90%;
}
.textli{
  width: 270px;
}
}
</style>