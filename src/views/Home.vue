<template>
<div>
  <homes></homes>
  <div class="flex">
  </div>
</div>
  
</template>

<script>
import Homes from '../components/home/home'
import {reSelect} from '../components/axiosRequest/axiosRequest'
export default {
  name: 'Home',
  components:{
    Homes
  },
  data(){
    return{
      divFlex:null,
      div:[],
      divTxt:[],
      divTitle:[],
      title:[],
    }
  },
  created(){
    reSelect({ 
            method:'get',
            url:'/selectblog'
          }).then( res => {
            this.divFlex = document.getElementsByClassName('flex')[0]
            this.dataTxt = res.data
            for(let i =0;i<6;i++){
              //创建展示博客的 div
                  this.div[i] = document.createElement('div')
                  this.div[i].className = 'big'
                  // 创建展示 博客标题的 div
                  this.divTitle[i] = document.createElement('div')
                  this.divTitle[i].className = 'home-title'
                  this.divTitle[i].innerHTML = this.dataTxt[i].title
                  //创建展示 博客 内容的div
                  this.divTxt[i] = document.createElement('div')
                  this.divTxt[i].innerHTML = this.dataTxt[i].txt
                  //添加进去
                  this.div[i].appendChild(this.divTitle[i])
                  this.div[i].appendChild(this.divTxt[i])
                  this.divFlex.appendChild(this.div[i])
                  this.div[i].onclick= ()=> {
                    this.$router.push({path:this.dataTxt[i].type+"/"+this.dataTxt[i].id,
                                       query:{pageid:this.dataTxt[i].id} })
                  }
            }
          }).catch( err => {
            console.log(err);
          })
  }
}

</script>

<style>
.big{
  width: 34%;
  padding:0 3%;
  height: 300px;
  /* margin-left: 5%; */
  cursor: pointer;
  border: .5px solid #fff;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 20px;
  overflow: hidden;
}
.big:hover{
    transition: all .5s;
    transform: scale(1.1,1.1)
  }
.home-title{
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ff6700;
}
@media screen and (max-width:480px){
  .big{
    width: 90%;
    margin: 0 5%;
    margin-top: 20px;
  }
}

</style>