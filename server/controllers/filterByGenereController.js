var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

function filterByGenere(req,res){

	mongoClient.connect(mongodbUrl,{useUnifiedTopology:true},(err,dbHost)=>{
		if(err){
			res.status(500);
			res.json({message:"Error connecting the mongodb server"});
		}else{
			var db = dbHost.db("BookBazaar");
			db.collection("filterByGenere",(err,coll)=>{
				if(err){
					res.status(500);
					res.json({message:"Error connecting the mongodb server"});
				}else{
					coll.find({}).toArray((err,data)=>{
						if(err){
							res.status(500);
							res.json({message:"Error connectin to mongodb"});
						}else{
							console.log("Result of all filterByAuthor", data);
							res.json(data);	
						}
						
					})
				}
			})
		}
	})


}

module.exports = {filterByGenere}