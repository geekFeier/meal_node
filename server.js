 // app.use(express.static('public'));  
 var http = require('http');
 var url = require('url');
 var util = require('util');
 // var Food = require('./food');//这个是自己写的用来向数据库写入用户的文件
 var express = require('express');
 var app = express();
 // var food = new Food(); 

 app.get('/', function(req, res) {
 	//解析URL参数
 	var params = url.parse(req.url, true).query;
 	var mysql = require('mysql');
 	var connection = mysql.createConnection({
 		host: 'localhost',
 		user: 'root',
 		password: '',
 		database: 'meal',
 	});

 	connection.connect();

 	var modSql = "SELECT * FROM food_list";

 	connection.query(modSql, function(err, result) {
 		if (err) {
 			console.log('[UPDATE ERROR] - ', err.message);
 			return;
 		} 
 		res.jsonp(result) 
 	});

 	connection.end();
 	// res.json(data) 
 }).listen(8000);