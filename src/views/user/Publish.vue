<template>
<div class="pubish">
    <div>
        <input type="text" v-model="blogName" class="new-blog-name" placeholder="请输入文章名">
        <select v-model="selectType" class="choice-type">
            <option value="js">js</option>
            <option value="css">css</option>
            <option value="vue">vue</option>
        </select>
        <div>
            <input type="file" value="选择图片" accept="image/*" class="upload-img" @change="blogImg($event)" ref="file">
        </div>
    </div>
    <div>
        <div contenteditable="true" class="new-blog-txt"  id="text">
            <p>
                <br>
            </p>
        </div>
    </div>
    <div>
        <button @click="submitBlog">发布</button>
    </div>
</div>
</template>

<script>
import {reSelect} from '../../components/axiosRequest/axiosRequest'
export default {
name:"Publish",
data(){
    return{
        imgSrc:null,
        selectType:null,
        blogName:null,
        blogTxt:null,
        myDate:null,
        blogText:null,
        file:{}
    }
},
methods:{
    // 添加图片
    blogImg(e) {
        this.file=e.target.files[0];
        var fd=new FormData();      //创建form对象
        fd.append("file",this.file);        //通过append向form对象添加数据
        // // this.$axios.post("http://101.132.235.218:3000/api/user/img",fd,{
        //     this.$axios.post("http://192.168.1.2:3000/api/user/img",fd,{
        // // onUploadProgress: (progressEvent) => {
        // //     this.rate=parseInt( (  progressEvent.loaded/progressEvent.total  ) * 100 );
        // // }
        // }).then(res =>{
        //     console.log(res);
        // })
        reSelect({
            method:"post",
            url:"/img",
            data:fd
        }).then(res =>{
             console.log(res);
         })
    },
    // 提交文章
    submitBlog(){
        this.myDate = new Date();
        this.blogText = document.getElementById("text").innerHTML
        if(!this.selectType){
            alert('请选择发布模块')
        }else{
            reSelect({
            method:'post',
            url: '/add'+this.selectType,
            data: {
                blogName: this.blogName,
                blogTxt: this.blogText,
                blogImg: this.imgSrc,
                blogType:this.selectType,
                blogTime:this.myDate.getFullYear()+"年"+(this.myDate.getMonth()+1)+"月"+this.myDate.getDate()+"日"+this.myDate.getHours()+"时"+this.myDate.getMinutes()+"分"+this.myDate.getSeconds()+"秒"
            }
        }).then(res => {
            switch(res.data){
            case 0: 
                console.log("提交成功");
                break;
            case -1:
                console.log("提交失败");
                break;
            }
        }).catch(err => {
            console.log(err);
        })
        }
        
    }
}
}

</script>

<style>
.pubish{
    text-align: center;
}
.pubish button{
    height: 40px;
    width: 120px;
    color:#ff6700;
    margin-top: 20px;
}
.new-blog-name{
    height: 30px;
    width: 150px;
    margin-bottom: 20px;
}
.choice-type{
    margin-left: 20px;
    height: 30px;
    width: 50px;
}
.new-blog-txt{
    padding: 10px;
    font-size: 18px;
    width: 90%;
    height: 600px;
    outline: none;
    margin: 0 auto;
    margin-top: 10px;
    overflow: auto;
    background-color: #fff;
    text-align: left;
    border: 1px solid #dedede;
    border-left: 5px solid #42b983;
}
.new-blog-txt p{
    width: 100%;
    text-align: left;
}
@media screen and (max-width:480px){
    .new-blog-txt{
    width: 90%;
}
}
</style>