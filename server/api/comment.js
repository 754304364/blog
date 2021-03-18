const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');

const conn = mysql.createConnection(models.mysql);
conn.connect();

router.post('/comment', (req, res) => {
    const params = req.body;
	const add_sql = $sql.user.comment;
	conn.query(add_sql,[params.blogid,params.userid,params.txt,params.time,params.img],(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
});

router.post('/selCom',(req,res) =>{
	const params = req.body;
	const add_sql = $sql.user.selectComment +' where blogid = '+ params.blogid +' and id>0 order by id desc';
	conn.query(add_sql,(err, result) => {
		console.log(result);
		if (err) {
			console.log(err);
		} else{
			res.send(result); //  表示成功
		}
	});
})
module.exports = router;