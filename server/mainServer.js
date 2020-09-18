var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const PORT = 3000;

app.listen(PORT,(err)=>{
	if(!err){
		console.log(`server is running at Port ${PORT}`);
	}
})