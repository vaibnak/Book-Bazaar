var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const PORT = 3000;

var registerUserRoute = require('./routes/registerUserRoute');
var loginUserRoute = require('./routes/loginUserRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


// endpoint to register the user
app.use('/api/register',registerUserRoute);

// endpoint to login the user
app.use('/api/login',loginUserRoute);





app.listen(PORT,(err)=>{
	if(!err){
		console.log(`server is running at Port ${PORT}`);
	}
})