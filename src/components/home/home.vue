<template>
  <div class="home-banner">
      <div class="lunbo">
          <div class="lunbo-img" v-for="(item,index) in lunboImg" :key="index" :class="{opacity:opacity === index}">
              <img :src="'/img/'+item" >
          </div>
          <button class="lunbo-btn-left" @click="lunboBtnLeft()"></button>
          <button class="lunbo-btn-right" @click="lunboBtnRight()"></button>
          <ul class="lunbo-ul">
              <li class="lunbo-li" v-for="(item,index) in [0,1,2]" :key="item" :class="{liColor:opacity === index}"></li>
          </ul>
      </div>

  </div>
</template>

<script>
export default {
name:'Homes',
data(){
    return{
        lunboImg:['home-lunbo.jpg','home-lunbo2.jpg','home-lunbo3.jpg'],
        opacity:0
    }
},
methods:{
    lunboBtnLeft(){
        this.opacity--
        if(this.opacity < 0){
            this.opacity =2
        }  
    },
    lunboBtnRight(){
        this.opacity++
        if(this.opacity >2){
            this.opacity = 0
        } 
    }
},
created(){
    setInterval(() => {
        this.lunboBtnRight()
    },3000)
}
}

</script>


<style scoped>
.home-banner{
    margin-top: 20px;
    width: 100%;
}
.lunbo{
    position: relative;
    width: 80%;
    margin: 0 auto;
    height: 700px;
    border: 3px solid #fff;
    border-radius: 15px;
}
.lunbo-img{
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: all 1s;
}
.lunbo-img img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
.lunbo-btn-left{
    position: absolute;
    top: 50%;
    margin-top: -40px;
    border: 56px solid transparent!important;
    border-left: 60px solid hsla(0,0%,100%,.9)!important;
    border-radius: 0!important;
    background-color: transparent!important;
}
.lunbo-btn-right{
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -40px;
    border: 56px solid transparent!important;
    border-right: 60px solid hsla(0,0%,100%,.9)!important;
    border-radius: 0!important;
    background-color: transparent!important;
}
.lunbo-ul{
    position: absolute;
    right: 50%;
    margin-right: -88px;
    bottom: 20px;
}
.lunbo-li{
    float: left;
    height: 3px;
    width: 50px;
    margin-right: 5px; 
    background-color: #808A87;
}
.liColor{
    background-color: #fff;
}
.opacity{
    opacity: 1;
} 

@media screen and (max-width: 480px){
/* .home-banner{
    margin-top: 70px;
} */
.lunbo{
    width: 90%;
    height: 200px;
    margin: 0 5%;
}
.lunbo-btn-left{
    margin-top: -15px;
    border: 26px solid transparent!important;
    border-left: 30px solid hsla(0,0%,100%,.9)!important;
}
.lunbo-btn-right{
    margin-top: -15px;
    border: 26px solid transparent!important;
    border-right: 30px solid hsla(0,0%,100%,.9)!important;
}
}
</style>

