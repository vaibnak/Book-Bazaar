var mongoClient=require("mongodb").MongoClient;
const {Connection} = require("./dbConfig");

const dbUrl = Connection.dbUrl;
const dbName = Connection.dbName;
function uploadBook(req, res)
{
    mongoClient.connect(dbUrl,{ useUnifiedTopology: true }, (err, dbHost)=>{
        console.log('register user called')
        if(err)
        {
            res.status(500);
            res.json({message: "Not able to connect to the server"});
        }
        else
        {
            var db=dbHost.db(dbName);
            db.collection("books", (err, coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message: "Not able to connect to the collection"});
                }
                else
                {
                    var book = req.body;
                    console.log(book);
                    coll.insertOne({title:book.title,author:book.author,description:book.description,price: book.price,releaseYear:book.releaseYear, genere:book.genere, image:book.image}, (err, result)=>{
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
                                    res.json({message:"Book Added"});
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

module.exports = {uploadBook};