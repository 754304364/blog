const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const app = express();

const blogApi = require('./api/blogApi.js');
const imgApi = require('./api/img.js')
const commentApi = require('./api/comment.js')
const user = require('./api/user.js')

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

app.use("/api/user",imgApi)
app.use("/api/user",commentApi)
app.use("/api/user",blogApi);
app.use("/api/user",user);

app.listen(3000);
console.log("success");