const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const conn = mysql.createConnection(models.mysql);
conn.connect();

//引入multer
const multer = require('multer')
var fs = require("fs");
//设置上传文件存储地址
const upload = multer({ dest: 'uploads/' })

router.post("/img",upload.single("file"),function(req,res){
    var fileName="";
    if(req.file!=undefined){
        fileName=new Date().getTime()+"_"+req.file.originalname;
        fs.renameSync(req.file.path,__dirname+"/"+fileName); 
		res.send((req.file.path,__dirname+"/"+fileName))   //重命名，加后缀，不然图片会显示乱码，打不开
    }
});
module.exports = router;
