/* 
File Metadata Microservice
Raymond Rizzo
*/

var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.post('/Upload',multer({ dest: './uploads/'}).single('uploadFile'), function(httpRequest, httpResponse){
	var storage = multer.memoryStorage();
	var upload = multer({ storage: storage });
	var sizeOut = { 'size': httpRequest.file.size};
	httpResponse.writeHead(200, { "Content-Type": "application/json" });
	httpResponse.end(JSON.stringify(sizeOut));
});

app.get('/*', function(httpRequest, httpResponse){
	httpResponse.sendFile(__dirname + '/about.html');
});

app.listen(process.env.PORT);