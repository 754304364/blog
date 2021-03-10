<template>
  <div>
      <div class="center-title"></div>
      <div class="center-blog" v-for="(item,index) in arr">
            <div class="blog-title">{{item.title}}</div>
            <div class="blog-text"></div>
       </div>
       <nav class="home-nav">
           <ol class="home-ol">
               <li class="home-ol-li" v-for='(item,index) in [1,2]' :key="index" :class="{licolor:page == index+1}">
                   <a :href="'/home/'+(index+1)">{{index+1}}</a>
              </li>
           </ol>
       </nav>
       
  </div>
</template>

<script>
import {reSelect} from '../axiosRequest/axiosRequest'
export default {
name:'homes',
data(){
    return{
        page:0,
        pagenum:0,
        arr:null,
        text:[],
        div:[],
        blogId:[],
        blogLength:0
    }
},
beforeCreate(){
    //获取 path 里的页码数

},
created(){
    if(!this.$route.path.substring(6)){
        this.page = 1
        this.pagenum = 0
    }else{
        this.page =Number(this.$route.path.substring(6)) 
        this.pagenum =(this.$route.path.substring(6) -1) *6
    }
    console.log(this.page);
    reSelect({ 
        method:'get',
        url:'/blogLength'
    }).then( res => {
        this.blogId = res.data
        this.blogLength = this.blogId.length
    }).catch( err => {
        console.log(err);
    })


     reSelect({ 
        method:'post',
        url:'/blogpage',
        data:{
            pagenum:this.pagenum
        },
    }).then( res => {
        this.arr = res.data
        this.$nextTick(()=>{
            for(let i = 0;i < this.arr.length;i++){
                this.div[i] = document.createElement('div')
                this.text[i] = document.getElementsByClassName("blog-text")[i]
                this.div[i].innerHTML = this.arr[i].txt
                this.text[i].appendChild(this.div[i])
                 this.text[i].onclick= ()=> {
                    this.$router.push({path:'/'+this.arr[i].type+"/"+this.arr[i].id,
                                       query:{pageid:this.arr[i].id} })
                  }
            }
        });
    }).catch( err => {
        console.log(err);
    })
    },
}
</script>

<style>
@import url(home.css);
</style>