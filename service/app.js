const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const app = express();

const userApi = require('./api/userApi.js');

// 解析 application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// 解析 application/json
// app.use(bodyParser.json({limit : '210000kb'}));
app.use(bodyParser.json({ 
	limit:'10mb'}));
 app.use(bodyParser.urlencoded({
	 limit:'10mb', extended: true }));
app.use(cors());

//设置跨域请求
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.use("/api/user",userApi);

app.listen(3000);
console.log("success");