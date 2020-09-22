var mongoClient=require("mongodb").MongoClient;

var mongodbUrl = "mongodb://localhost:27017/";

function removeUserBook(req, res)
{
    mongoClient.connect(mongodbUrl,{ useUnifiedTopology: true }, (err, dbHost)=>{
        console.log('remove userBook called')
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
                    coll.remove({user:userBook.userName,book:{$in:userBook.book}}, (err, result)=>{
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
                                    res.json({message:"userBook removed"});
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

module.exports = {removeUserBook};