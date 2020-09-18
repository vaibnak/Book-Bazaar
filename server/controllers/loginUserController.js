var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function loginUser(req, res)
{
    mongoClient.connect(mongodbUrl, (err, dbHost)=>{
        if(err)
        {
            res.status(500);
            res.json({message: "Not able to connect to the server"});
        }
        else
        {
            var db=dbHost.db("BookBazaar");
            db.collection("users", (err, coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message: "Not able to connect to the collection"});
                }
                else
                {
                    var user = req.body;
                    coll.findOne({userName:user.userName, 
                        password:user.password}, (err, result)=>{
                            if(err)
                            {
                                res.status(500);
                                res.json({message:err});
                            }
                            else
                            {
                                if(result)
                                {
                                    res.status(200);
                                    res.json({message:true});
                                }
                                else
                                {
                                    res.status(201);
                                    res.json({message:false});
                                }
                            }
                        })
                }
            })
        }
    })
}

module.exports = {checkUser};