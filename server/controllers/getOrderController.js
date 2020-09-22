var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

function getOrder(req,res){

	mongoClient.connect(mongodbUrl,{useUnifiedTopology:true},(err,dbHost)=>{
		if(err){
			res.status(500);
			res.json({message:"Error connecting the mongodb server"});
		}else{
			var db = dbHost.db("BookBazaar");
			db.collection("orders",(err,coll)=>{
				if(err){
					res.status(500);
					res.json({message:"Error connecting the mongodb server"});
				}else{
					var user = req.body;
					coll.find({user:user.userName}).toArray((err,data)=>{
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

module.exports = {getOrder}