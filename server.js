 
// app.use(express.static('public'));  
var http = require('http');
var url = require('url');
var util = require('util');
var Food = require('./food');//这个是自己写的用来向数据库写入用户的文件
var food = new Food();
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
    //解析URL参数
    var params = url.parse(req.url,true).query;
    food.getFood(params);
    res.write("success getFood");
    res.end();
}).listen(8000);