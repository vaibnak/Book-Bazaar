var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

function filterByYear(req,res){

	mongoClient.connect(mongodbUrl,{useUnifiedTopology:true},(err,dbHost)=>{
		if(err){
			res.status(500);
			res.json({message:"Error connecting the mongodb server"});
		}else{
			var db = dbHost.db("BookBazaar");
			db.collection("filterByYear",(err,coll)=>{
				if(err){
					res.status(500);
					res.json({message:"Error connecting the mongodb server"});
				}else{
					coll.find({}).toArray((err,data)=>{
						if(err){
							res.status(500);
							res.json({message:"Error connectin to mongodb"});
						}else{
							console.log("Result of all filterByYear", data);
							res.json(data);	
						}
						
					})
				}
			})
		}
	})


}

module.exports = {filterByYear}