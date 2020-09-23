var mongoClient = require("mongodb").MongoClient;
const {Connection} = require("./dbConfig");

const dbUrl = Connection.dbUrl;
const dbName = Connection.dbName;
function getUser(req,res){
	console.log("get user");

	mongoClient.connect(dbUrl,{useUnifiedTopology:true},(err,dbHost)=>{
		if(err){
			console.log("err: ",err);
			res.status(500);
			res.json({message:"Error connecting the mongodb server"});
		}else{
			console.log("connection succesfull");
			var db = dbHost.db(dbName);
			db.collection("users",(err,coll)=>{
				if(err){
					res.status(500);
					res.json({message:"Error connecting the mongodb server"});
				}else{
					var user = req.body;
					coll.find({userName:user.userName}).toArray((err,data)=>{
						if(err){
							res.status(500);
							res.json({message:"Error connectin to mongodb"});
						}else{
							console.log("Result of username", data);
							res.json(data);	
						}
						
					})
				}
			})
		}
	})


}

module.exports = {getUser}