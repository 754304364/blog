var sqlMap = {
    user: {
        // 注册账号
        add: 'insert into user (id,username,password) values (0,?,?)',
        // 登录账号
        select: 'select * from user',
        selectblog:'select * from blog where id>0 order by id desc',
        // 添加与获取 js 博客
        addjs:'insert into blog (id,title,txt,time,type) values (0,?,?,?,?)',
        selectjs:"select * from blog where type='js' and id>0 order by id desc" ,
        selectjsid:'select * from blog',
         // 添加与获取 css 博客
         addcss:'insert into blog (id,title,txt,time,type) values (0,?,?,?,?)',
        // 按照 id 倒序查询
        selectcss:"select * from blog where type='css' and id>0 order by id desc" ,
        selectcssid:'select * from blog',
         // 添加与获取 vue 博客
         addvue:'insert into blog (id,title,txt,time,type) values (0,?,?,?,?)',
         selectvue:"select * from blog where type='vue' and id>0 order by id desc",
         selectvueid:'select * from blog',

         blogLength:'select id from blog',//查询有多少条博客
         blogpage:'select * from blog',//首页分页查询
         addviews:"update blog set views = views+1",//添加文章浏览量
         adddz:"update blog set dianzan = dianzan+1",//添加文章点赞数

         comment:'insert into comment (id,blogid,userid,txt,time,userimg) values (0,?,?,?,?,?)',
         selectComment:'select * from comment'
    }
}

module.exports = sqlMap;