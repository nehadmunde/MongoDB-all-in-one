console.log('Mongo DB started');
const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017'; // path of mongo db
const database='e-comm';//define database
const client = new MongoClient(url);

async function getData()
{
let result=await client.connect();
let db=result.db(database);//
let collection=db.collection('products'); //define collection name
let response=await collection.find({}).toArray();
//collects data from collection in the form of array
//let response=await collection.find({name:"Redmi-9"}).toArray();
//collects specific data from collection in the form of array
console.log(response);//printing data
}

getData()