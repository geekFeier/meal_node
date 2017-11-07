 
// app.use(express.static('public'));  
var http = require('http');
var url = require('url');
var util = require('util');
var Food = require('./food');//这个是自己写的用来向数据库写入用户的文件
var express = require('express');
var app = express();
var food = new Food(); 

app.get('/', function (req, res) { 
    //解析URL参数
    var params = url.parse(req.url,true).query;
     
    res.json({
    	brackfast:'brand'
    }) 
}).listen(8000);