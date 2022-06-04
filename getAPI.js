const express=require('express');
const dbConnect = require('./mongoDB');
const mongodb=require('mongodb');
const app=express();
const port=7000;
const db=require('./mongoDB');
app.use(express.json());// accept json data in app

//get method 
app.get('/',async(req,res)=>{
    // req=to request data from api
    //res=response send by database
    let data= await dbConnect();
    data=await data.find().toArray();
    res.send(data);
})

//post method for send data
app.post('/post',async(req,res)=>{
    console.log(req.body)
    let data= await dbConnect();//database connection
    let result= await data.insertOne(req.body); //code for insertion
    res.send(result);
})

//put method for update data
app.put('/put/:name',async (req,res)=>{// change the name app.put('/put:name',async (req,res)=>{
    // pass name like this==>  http://localhost:7000/put/Redmi-9
    console.log(req.body);
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:req.params.name},//if we want to change name then use param {name:req.param.name}
        {$set:req.body});
    res.send({status:'Updated Sucessfully'}); // sending status updated
})

//delete method for delete data 
app.delete('/delete/:id', async(req,res)=>{
    // pass id like this==>  http://localhost:7000/delete/629918eeec568a623992905b
    console.log(req.params.id);
    let data=await dbConnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result,{status:'Deleted sucessfully'})
})

app.listen(port,()=>{
    console.log(`Server listnong from port ${port}`)
});