const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');

const conn = mysql.createConnection(models.mysql);
conn.connect();

// 登录接口
router.post('/login',(req,res)=>{
	const user = req.body;
    const sel_username = $sql.user.select + " where username = " + user.username + "";
	conn.query(sel_username, user.username, (error, results)=>{
		if (error) {
			throw error;
		}
		console.log(results)
		if (results[0] === undefined) {
			res.send("-1");  // -1 表示查询不到，用户不存在，即邮箱填写错误
		} else{
			if (results[0].username == user.username && results[0].password == user.password) {
				res.send("0");  // 0 表示用户存在并且邮箱密码正确
			} else{
				res.send("1");  // 1 表示用户存在，但密码不正确
			}
		}
	})
});

// 注册接口
router.post('/add', (req, res) => {
	const params = req.body;
	const sel_sql = $sql.user.select + " where username = '" + params.username + "'";
	const add_sql = $sql.user.add;
	
	conn.query(sel_sql, params.username, (error, results) => {
		if(error) {
			console.log(err);
		}
		if (results.length != 0 && params.username == results[0].username) {
			res.send("-1");   // -1 表示用户名已经存在
		} else {
                conn.query(add_sql, [params.username, params.password], (err, rst) => {
				if (err) {
					console.log(err);
				} else{
					console.log(rst);
					res.send("0"); // 0 表示用户创建成功
				}
			});
		}
	});
});

// 添加博客 js 分类
router.post('/addjs', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.addjs;
	conn.query(add_sql, [params.blogName, params.blogTxt,params.blogTime], (err, rst) => {
		if (err) {
			console.log(err);
		} else{
			console.log(rst);
			res.send("0"); // 0 表示成功
		}
	});
	
});
//读取博客 js  子分类
router.post('/selectjsid', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.selectjs + " where id = " + params.id + "";
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});
// 读取博客 js 分类
router.get('/selectjs',(req, res, next)=>{
	const select = $sql.user.selectjs;
	conn.query(select,(err,result) =>{
		if(err){
				console.log('[SELECT ERROR] - ',err.message);
				return;
			}
			res.send(result)
	})
})


// 添加博客 css 分类
router.post('/addcss', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.addcss;
	conn.query(add_sql, [params.blogName, params.blogTxt,params.blogTime], (err, rst) => {
		if (err) {
			console.log(err);
		} else{
			res.send("0"); // 0 表示成功
		}
	});
	
});
// 读取博客 css 分类
router.get('/selectcss',(req, res, next)=>{
	const select = $sql.user.selectcss;
	conn.query(select,(err,result) =>{
		if(err){
				console.log('[SELECT ERROR] - ',err.message);
				return;
			}
			res.send(result)
	})
})
router.post('/selectcssid', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.selectcss + " where id = " + params.id + "";
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});


// 添加博客 vue 分类
router.post('/addvue', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.addvue;
	conn.query(add_sql, [params.blogName, params.blogTxt,params.blogTime], (err, rst) => {
		if (err) {
			console.log(err);
		} else{
			console.log(rst);
			res.send("0"); // 0 表示成功
		}
	});
	
});
// 读取博客 vue 分类
router.get('/selectvue',(req, res, next)=>{
	const select = $sql.user.selectvue;
	conn.query(select,(err,result) =>{
		if(err){
				console.log('[SELECT ERROR] - ',err.message);
				return;
			}
			res.send(result)
	})
})
//读取博客 vue  子分类
router.post('/selectvueid', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.selectvue + " where id = " + params.id + "";
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});

module.exports = router;