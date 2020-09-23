var mongoClient=require("mongodb").MongoClient;
const {Connection} = require("./dbConfig");

const dbUrl = Connection.dbUrl;
const dbName = Connection.dbName;

function registerUser(req, res)
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
            db.collection("users", (err, coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message: "Not able to connect to the collection"});
                }
                else
                {
                    var user = req.body;
                    console.log(user);
                    coll.insertOne({name:user.name,userName:user.userName,phoneNo:user.phoneNo,password:user.password,address:user.address}, (err, result)=>{
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
                                    res.json({message:"user registered"});
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

module.exports = {registerUser};