var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const PORT = 3000;

var registerUserRoute = require('./routes/registerUserRoute');
var loginUserRoute = require('./routes/loginUserRoute');
var uploadBookRoute = require('./routes/uploadBookRoute');
var getBookRoute = require('./routes/getBookRoute');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());


// endpoint to register the user
app.use('/api/register',registerUserRoute);

// endpoint to login the user
app.use('/api/login',loginUserRoute);

// endpoint to upload a book
app.use('/api/upload',uploadBookRoute);

// endpoint to get the books
app.use('/api/getBook',getBookRoute);




app.listen(PORT,(err)=>{
	if(!err){
		console.log(`server is running at Port ${PORT}`);
	}
})