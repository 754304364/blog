const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');

const conn = mysql.createConnection(models.mysql);
conn.connect();


router.get('/selectblog', (req, res) => {
	const add_sql = $sql.user.selectblog;
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});
//获取有多少条博客及其 id
router.get('/blogLength', (req, res) => {
	const add_sql = $sql.user.blogLength;
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); 
		}
	});
});
//获取首页博客页码分类
router.post('/blogpage', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.blogpage + " limit " + params.pagenum +"," + "6" ;
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); 
		}
	});
});
// 添加博客 js 分类
router.post('/addjs', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.addjs;
	conn.query(add_sql, [params.blogName, params.blogTxt,params.blogTime,params.blogType], (err, rst) => {
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
	const add_sql = $sql.user.selectjsid + " where id = " + params.id + "";
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
	conn.query(add_sql, [params.blogName, params.blogTxt,params.blogTime,params.blogType], (err, rst) => {
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
	const add_sql = $sql.user.selectcssid + " where id = " + params.id +"";
	// const add_sql = "update blog set dianzan = dianzan+1 where id = "+params.id +";"+$sql.user.selectcssid + " where id = " + params.id + ""
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
	conn.query(add_sql, [params.blogName, params.blogTxt,params.blogTime,params.blogType], (err, rst) => {
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
	const add_sql = $sql.user.selectvueid + " where id = " + params.id + "";
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});
//添加浏览量
router.post('/addviews', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.addviews + " where id = " + params.id + "";
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});
//添加点赞数
router.post('/adddz', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.adddz + " where id = " + params.id + "";
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




