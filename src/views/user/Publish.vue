<template>
<div class="pubish">
    <div>
        <input type="text" v-model="blogName" class="new-blog-name" placeholder="请输入文章名">
    </div>
    <div>
        <textarea v-model="blogTxt" class="new-blog-txt" placeholder="请输入博客内容"></textarea>
    </div>
    <div>
        <button @click="submitBlog">发布</button>
    </div>
    
</div>
</template>

<script>
export default {
name:"Publish",
data(){
    return{
        blogName:null,
        blogTxt:null,
        myDate:null
    }
},
methods:{
    submitBlog(){
        this.myDate = new Date();
        this.$axios({
						method:'post',
						url: 'http://127.0.0.1:3000/api/user/addblog',
						data: {
							blogName: this.blogName,
							blogTxt: this.blogTxt,
                            blogTime:this.myDate.getFullYear()+"年"+this.myDate.getMonth()+"月"+this.myDate.getDate()+"日"+this.myDate.getHours()+"日"
						}
					})
					.then( res => {
						switch(res.data){
							case 0: 
                                console.log("提交成功");
								break;
							case -1:
								console.log("提交失败");
								break;
						}
					}).catch( err => {
						console.log(err);
					})
    }
}
}

</script>

<style>
.pubish button{
    height: 40px;
    width: 120px;
    color:#ff6700;
}
.new-blog-name{
    height: 30px;
    width: 150px;
    margin-bottom: 20px;
}
.new-blog-txt{
    font-size: 18px;
    width: 80%;
    height: 600px;
    outline: none;
    resize : none;
}
</style>