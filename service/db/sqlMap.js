var sqlMap = {
    user: {
        add: 'insert into user (id,username,password) values (0,?,?)',
        // add:INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)'.
        select: 'select * from user',
        addblog:'insert into blog (id,name,txt,time) values (0,?,?,?)',
        selectjs:'select * from blog_js'
    }
}

module.exports = sqlMap;