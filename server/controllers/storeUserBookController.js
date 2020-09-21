var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function storeUserBook(req, res)
{
    mongoClient.connect(mongodbUrl,{ useUnifiedTopology: true }, (err, dbHost)=>{
        console.log('store userBook called')
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
                    var userBook = req.body;
                    console.log(userBook);
                    coll.insertOne({user:userBook.userName,book:userBook.book,quantity:userBook.quantity}, (err, result)=>{
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
                                    res.json({message:"userBook Added"});
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

module.exports = {storeUserBook};