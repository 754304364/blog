<template>
  <div>
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
     mounted(){
        this.$axios({ 
                method:'get',
                url: 'http://127.0.0.1:3000/api/user/select'+this.cpagetype
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
      }
        })
  }
}
</script>

<style>
.txtContainer{
  width: 100%;
  text-align: left;
  overflow: hidden;
  min-height: 200px;
  color: #000;
  font-size: 16px;
  background-color: rgba(66, 185, 131, .1);
}
.txt-name{
  font-size: 20px;
  color: #ff6700;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
}
.textli{
  margin-top: 30px;
  background-color: #fff;
  border-left: 5px solid #42b983;
  border-radius: 10px;
}
@media screen and (max-width:480px) {
.txt-name{
  width: 90%;
}
}
</style>