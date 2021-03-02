var sqlMap = {
    user: {
        // 注册账号
        add: 'insert into user (id,username,password) values (0,?,?)',
        // 登录账号
        select: 'select * from user',
        // 添加与获取 js 博客
        addjs:'insert into blog_js (id,name,txt,time) values (0,?,?,?)',
        selectjs:'select * from blog_js',
         // 添加与获取 css 博客
         addcss:'insert into blog_css (id,name,txt,time) values (0,?,?,?)',
         selectcss:'select * from blog_css',
         // 添加与获取 vue 博客
         addvue:'insert into blog_vue (id,name,txt,time) values (0,?,?,?)',
         selectvue:'select * from blog_vue'
    }
}

module.exports = sqlMap;