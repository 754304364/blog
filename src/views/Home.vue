<template>
  <div class="flex">
  </div>
</template>

<script>
import {reSelect} from '../components/axiosRequest/axiosRequest'
export default {
  name: 'Home',
  data(){
    return{
      divFlex:null,
      div:[],
      divTxt:[],
      divTitle:[],
      title:[],
      divType:[],
      divTypePush:['js','css','vue','js','css','vue']
    }
  },
  created(){
    reSelect.all([reSelect({
      url: '/selectjs',
    }),reSelect({
      url: '/selectcss',
    }),reSelect({
      url: '/selectvue',
    })]).then(reSelect.spread((res1,res2,res3) =>{
      this.divFlex = document.getElementsByClassName('flex')[0]
      for(let k = 0;k < 2; k++){
          this.divType.push(res1.data[k],res2.data[k],res3.data[k])
        }
      for(let i =0;i<6;i++){
        //创建展示博客的 div
        this.div[i] = document.createElement('div')
        this.div[i].className = 'big'
        // 创建展示 博客标题的 div
        this.divTitle[i] = document.createElement('div')
        this.divTitle[i].className = 'home-title'
        this.divTitle[i].innerHTML = this.divType[i].name
        //创建展示 博客 内容的div
        this.divTxt[i] = document.createElement('div')
        // this.divTxt[i].className = 'home-title'
        this.divTxt[i].innerHTML = this.divType[i].txt
        //添加进去
        this.div[i].appendChild(this.divTitle[i])
        this.div[i].appendChild(this.divTxt[i])
        this.divFlex.appendChild(this.div[i])
        this.div[i].onclick=()=>{
          this.$router.push({path:this.divTypePush[i]+"/"+this.divType[i].id,
                              query:{pageid:this.divType[i].id} })
        }
      }
    }))
  }
}

</script>

<style>
.big{
  width: 40%;
  height: 200px;
  margin-left: 5%;
  border: .5px solid #000;
  border-radius: 25px;
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
  height: 30px;
  line-height: 30px;
}
@media screen and (max-width:480px){
  .flex{
    margin: 0 5%;
  }
  .big{
    width: 80%;
    margin-top: 30px;
  }
}

</style>