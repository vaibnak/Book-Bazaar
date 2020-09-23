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
var filterByAuthorRoute = require('./routes/filterByAuthorRoute');
var filterByGenereRoute = require('./routes/filterByGenereRoute');
var filterByYearRoute = require('./routes/filterByYearRoute');
var storeUserBookRoute = require('./routes/storeUserBookRoute');
var getUserBookRoute = require('./routes/getUserBookRoute');
var getBookFromBooksRoute = require('./routes/getBookFromBooksRoute');
var removeUserBookRoute = require('./routes/removeUserBookRoute');
var updateQuantityRoute = require('./routes/updateQuantityRoute');
var orderBookRoute = require('./routes/orderBookRoute');
var getOrderRoute = require('./routes/getOrderRoute');
var getUserRoute = require('./routes/getUserRoute');


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cors());


app.use(express.static(path.join(__dirname,"public","dist","Book-Bazaar")));

// endpoint to register the user
app.use('/api/register',registerUserRoute);

// endpoint to login the user
app.use('/api/login',loginUserRoute);

// endpoint to upload a book
app.use('/api/upload',uploadBookRoute);

// endpoint to get the books
app.use('/api/getBook',getBookRoute);

// endpoint to get all the authors
app.use('/api/filterByAuthor',filterByAuthorRoute)

// endpoint to get all the book genere
app.use('/api/filterByGenere',filterByGenereRoute);

// endpoint to get all the book year
app.use('/api/filterByYear',filterByYearRoute);

// endpoint to store the userBook
app.use('/api/storeUserBook',storeUserBookRoute);

// endpoint to get the books of the user
app.use('/api/getUserBook',getUserBookRoute);

// endpoint to get one book from the set of books
app.use('/api/getBookFromBooks',getBookFromBooksRoute)

// endpoint to remove book
app.use('/api/removeUserBook',removeUserBookRoute);

// endpoint to updateQuantity
app.use('/api/updateQuantity',updateQuantityRoute);

// endpoint to store order
app.use('/api/orderBook',orderBookRoute);

// endpoint to get all the orders
app.use('/api/getOrder',getOrderRoute);

// endpoint to get a user by userName
app.use('/api/getUser',getUserRoute);





app.listen(PORT,(err)=>{
	if(!err){
		console.log(`server is running at Port ${PORT}`);
	}
})