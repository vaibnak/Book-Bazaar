var mongoClient = require("mongodb").MongoClient;
const {Connection} = require("./dbConfig");

const dbUrl = Connection.dbUrl;
const dbName = Connection.dbName;
function getBookFromBooks(req,res){

	mongoClient.connect(dbUrl,{useUnifiedTopology:true},(err,dbHost)=>{
		if(err){
			res.status(500);
			res.json({message:"Error connecting the mongodb server"});
		}else{
			var db = dbHost.db(dbName);
			db.collection("books",(err,coll)=>{
				if(err){
					res.status(500);
					res.json({message:"Error connecting the mongodb server"});
				}else{
					let book = req.body;
					coll.find({title:book.title}).toArray((err,data)=>{
						if(err){
							res.status(500);
							res.json({message:"Error connectin to mongodb"});
						}else{
							console.log("Result of all books", data);
							res.json(data);	
						}
						
					})
				}
			})
		}
	})


}

module.exports = {getBookFromBooks}