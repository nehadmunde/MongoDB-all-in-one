console.log('Mongo DB started');
const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017'; // path of mongo db
const database='e-comm';//define database
const client = new MongoClient(url);

async function dbConnect()
{
let result=await client.connect();
let db=result.db(database);//
return db.collection('products'); //define collection name
}

module.exports=dbConnect;