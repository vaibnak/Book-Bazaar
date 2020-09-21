var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function getUserBook(req, res)
{
    mongoClient.connect(mongodbUrl,{ useUnifiedTopology: true }, (err, dbHost)=>{
        console.log('get userBook called')
        if(err)
        {
            res.status(500);
            res.json({message: "Not able to connect to the server"});
        }
        else
        {
            var db=dbHost.db("BookBazaar");
            db.collection("userBook", (err, coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message: "Not able to connect to the collection"});
                }
                else
                {
                    var user = req.body;
                    console.log("user: ", user);
                    coll.find({user:user.user}).toArray((err, result)=>{
                            if(err)
                            {
                                res.status(500);
                                res.json({message:err});
                            }
                            else
                            {
                                if(result)
                                {
                                    console.log("results: ",result)
                                    res.status(200);
                                    res.json(result);
                                }
                                else
                                {
                                    res.status(201);
                                    res.json({message:"error"});
                                }
                            }
                        })
                }
            })
        }
    })
}

module.exports = {getUserBook};