<template>
  <div class="flex-login">
      <div class="user-name">
          <input type="text"  placeholder="请输入用户名" v-model="userName">
      </div>
      <div class="user-password">
          <input type="password"  placeholder="密码" v-model="userpwd">
      </div>
      <div class="login-sign">
          <button class="login-sign-login" @click="login">登录</button>
          <button class="login-sign-sign" @click="sign">注册</button>
          <div class="loginMes"><span>{{loginMes}}</span></div>
      </div> 
  </div>
</template>

<script>
import {reSelect} from '../components/axiosRequest/axiosRequest'
export default {
name:"Login",
data(){
    return{
        loginMes:"请登录",
        userName:null,
        userpwd:null
    }
},
methods:{
    toSign(){
        this.$router.push('/sign').catch(ery =>ery)
    },
    login(){
        if(!this.userName || !this.userpwd){
            this.loginMes = '请输入用户名或密码'
        }else{
            reSelect({
            method:'post',
            url: '/login',
            data: {
                username: this.userName,
                password: this.userpwd
            }
        }).then(res => {
            switch(res.data){
                case 0: 
                    this.$store.state.username = this.userName;
                    this.$store.commit("updateSigning");
                    this.$router.replace("/home")
                    break;
                case -1:
                    this.loginMes ="用户名或密码错误！";
                    break;
                case 1:
                    this.loginMes ="用户名或密码错误！";
                    break;
                }
            }).catch( err => {
                console.log(err);
            })
        }
        },
    sign(){
        if(!this.userName || !this.userpwd){
            this.loginMes = '请输入用户名或密码'
        }else{
            request({
            method:'post',
            url: '/api/user/add',
            data: {
                username: this.userName,
                password: this.userpwd
            }
        }).then( res => {
            switch(res.data){
            case 0:
                this.loginMes ="注册成功";
                this.login();
                break;
            case -1:
                this.loginMes ="用户名已存在";
                break;
                }
            })
            .catch( err => {
                console.log(err);
            })
    }     
}
        }
        
}
</script>


<style>
.flex-login{
    padding-top: 200px;
    text-align: center;
}
.flex-login input{
    height: 40px;
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 5px 10px;
}
.user-name {
    margin-bottom: 40px;
}
.login-sign{
    margin-top: 20px;
}
.login-sign button{
    width: 130px;
    height: 40px;
}
.login-sign-login{
    margin-right: 50px;
    border: 1px solid #0381aa;
    color: #fff;
    background-color: #00a7de;
}
.login-sign-login:hover{
    background: #0381aa;
}
.loginMes{
    margin-top: 20px;
    color: #ff6700;
    font-size: 18px;
}
</style>