var mongoClient=require("mongodb").MongoClient;
const {Connection} = require("./dbConfig");

const dbUrl = Connection.dbUrl;
const dbName = Connection.dbName;
function orderBook(req, res)
{
    mongoClient.connect(dbUrl,{ useUnifiedTopology: true }, (err, dbHost)=>{
        console.log('orderBook called')
        if(err)
        {
            res.status(500);
            res.json({message: "Not able to connect to the server"});
        }
        else
        {
            var db=dbHost.db(dbName);
            db.collection("orders", (err, coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message: "Not able to connect to the collection"});
                }
                else
                {
                    var order = req.body;
                    console.log(order);
                    coll.insertMany(order, (err, result)=>{
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
                                    res.json({message:"Book ordered"});
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

module.exports = {orderBook};