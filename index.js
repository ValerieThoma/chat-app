var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/',(req,res,next)=>{
// 	res.send("I still know what you did last summer");
// })

var server = http.createServer(app);
server.listen(8080);
console.log("I know what you did last summer");