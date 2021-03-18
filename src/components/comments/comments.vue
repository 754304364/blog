<template>
   <div>
       <div style="margin-top:50px"><h3>评论</h3></div>
       <div v-if="show">
           <div v-for="(item,index) in commentList" :key="index" class="comment">
               <img class="comment-img" :src="item.userimg" alt="" @click="goUser(item.userid)"> 
               <div class="comment-txt">
                   <div v-html="item.userid"></div> 
                   <div v-html="item.txt"></div>
                   <div v-html='item.time' class="comment-time"></div>         
               </div>
               
           </div>
       </div>

       <div v-else>暂无评论,抓紧机会发布第一条评论吧!</div>
       <div v-if="isLogin == true">
           发表评论
           <div contenteditable="true" class="input-comments" ref="inputCom">
               <p>
                   <br>
               </p>
           </div>
           <button class="published" @click="published()">发表</button>
       </div>
       <div  v-else class="login" @click="toLogin()">请登录</div>
   </div>
</template>

<script>
import {reSelect} from '../axiosRequest/axiosRequest'
export default {
    name:'comments',
    data(){
        return{
            isLogin:null,
            show:false,
            commentList:[],
            blogid:null,
            username:null,
            comTxt:null,
            myDate:null,
            userid:[],
        }
    },
    created(){
        this.isLogin = this.$store.state.isLogin
        this.blogid = this.$route.query.pageid
        reSelect({
            method:'post',
            url:'/selCom',
            data:{
               blogid:this.blogid
            }
        }).then(res =>{
            this.commentList = res.data
            if(this.commentList.length > 0){
                this.show = true
            }
            for(let item of res.data){
                this.userid.push(item.userid)
            }
        })
    },
    methods:{
        goUser(id){
            this.$router.push('/user/'+id)
        },
        published(){
            this.comTxt = this.$refs.inputCom.innerHTML 
            this.myDate = new Date();
            reSelect({
                method:'post',
                url:'/addcom',
                data:{
                    id:this.blogid
                }
            }).then(res =>{

            }),
            reSelect({
                method:'post',
                url:'/comment',
                data:{
                    blogid:this.blogid,
                    userid:this.$store.state.username,
                    txt:this.comTxt,
                    time:this.myDate.getFullYear()+"年"+(this.myDate.getMonth()+1)+"月"+this.myDate.getDate()+"日"+this.myDate.getHours()+"时"+this.myDate.getMinutes()+"分"+this.myDate.getSeconds()+"秒",
                    img:this.$store.state.user[0].img
                } 
            }).then(res =>{
                alert('发布成功')
            })
        },

        toLogin(){
            this.$router.push('/login').catch(ery =>ery)
        }
    }
}
</script>

<style>
.comment{
    position: relative;
    padding: 20px 0;
    border-top: 1px solid #e5e9ef;
}
.comment-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
}
.comment-txt{
   margin-left: 70px;
   margin-top: -50px;
}
.comment-time{
    color: #99a2aa;
    font-size: 13px;
}
.input-comments{
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    min-height: 150px;
    outline: none;
    border: 1px solid #ccc;
    border-left-color: #9a9a9a;
    border-top-color: #9a9a9a;
    padding: 5px;
}
.published{
    margin-top: 10px;
    height: 30px;
    width: 60px;
}
.login{
    width: 80%;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    background: #eee;
    border-radius: 10px;
}
</style>