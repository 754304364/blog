<template>
  <div>
      <div class="center-title"></div>
      <div class="center-blog" v-for="(item,index) in arr" :key="index">
            <div class="blog-title">{{item.title}}</div>
            <div class="blog-text" v-html="item.txt"></div>
            <div class="blog-information">
                <ul>
                    <li class="blog-time"><img src="../../../public/img/time.png" alt="">{{item.time}}</li>
                    <li class="blog-dz"><img src="../../../public/img/dz.png" alt="" @click="adddz(item.id,index)">{{item.dianzan}}</li>
                    <li class="blog-view"><img src="../../../public/img/liulan.png" alt="">{{item.views}}</li>
                    <li class="blog-comment"><img src="../../../public/img/comment.png" alt="">{{item.commentnum}}</li>
                </ul>
            </div>
       </div>
       <nav class="home-nav">
           <ol class="home-ol">
               <li class="home-ol-li" v-for='(item,index) in pageArr' :key="index" :class="{licolor:page == index+1}">
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
        pageArr:[],
        arr:null,
        text:[],
        blogId:[],
        blogLength:0
    }
},
methods:{
    adddz(id,index){
        reSelect({ 
            method:'post',
            url: '/adddz',
            data:{
                id:id
            }
        }).then( res => {
            this.arr[index].dianzan++;
        }).catch( err => {
            console.log(err);
        })
    }
},
created(){
    //如果登录了，则获取登录账号的资料 
    if(this.$store.state.username){
      reSelect({
          method:'post',
          url:'selectuser',
          data:{
              userid:this.$store.state.username
          }
      }).then(res =>{
          this.$store.commit('updataUser',res.data)
      })
    }

    if(!this.$route.path.substring(6)){
        this.page = 1
        this.pagenum = 0
    }else{
        this.page =Number(this.$route.path.substring(6)) 
        this.pagenum =(this.$route.path.substring(6) -1) *6
    }
    reSelect({ 
        method:'get',
        url:'/blogLength'
    }).then( res => {
        this.blogId = res.data
        this.blogLength = this.blogId.length
        for(let i =1;i <=Math.ceil(this.blogLength / 6);i++){
            this.pageArr.push(i)
        }
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
                this.text[i] = document.getElementsByClassName("blog-text")[i]
                 this.text[i].onclick= ()=> {
                    this.$router.push({path:'/'+this.arr[i].type+"/blog",
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