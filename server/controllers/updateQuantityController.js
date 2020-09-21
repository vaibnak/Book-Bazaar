var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function updateQuantity(req, res)
{
    mongoClient.connect(mongodbUrl,{ useUnifiedTopology: true }, (err, dbHost)=>{
        console.log('updateQuantity called')
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
                    var tmp = req.body;
                    console.log(tmp);
                    coll.updateOne({book:tmp.book,user:tmp.userName},{$set:{quantity:tmp.quantity}}, (err, result)=>{
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
                                    res.json({message:"Book updated"});
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

module.exports = {updateQuantity};