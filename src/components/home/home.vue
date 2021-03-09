<template>
  <div>
      <div class="center-title"></div>
      <div class="center-blog" v-for="(item,index) in arr">
            <div class="blog-title">{{item.title}}</div>
            <div class="blog-text"></div>
       </div>
  </div>
</template>

<script>
import {reSelect} from '../axiosRequest/axiosRequest'
export default {
name:'homes',
data(){
    return{
        arr:null,
        text:[],
        div:[]
    }
},
created(){
    reSelect({ 
        method:'get',
        url:'/selectblog'
    }).then( res => {
        this.arr = res.data
        this.$nextTick(()=>{
            for(let i = 0;i < this.arr.length;i++){
                this.div[i] = document.createElement('div')
                this.text[i] = document.getElementsByClassName("blog-text")[i]
                this.div[i].innerHTML = this.arr[i].txt
                this.text[i].appendChild(this.div[i])
                 this.text[i].onclick= ()=> {
                    this.$router.push({path:this.arr[i].type+"/"+this.arr[i].id,
                                       query:{pageid:this.arr[i].id} })
                  }
            }
            
        })
            ;
    }).catch( err => {
        console.log(err);
    })
    },
}
</script>

<style>

</style>