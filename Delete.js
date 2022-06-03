const dbConnect=require('./mongoDB');

const mongoDelete= async ()=>{
   console.log("Mongo Deletion started.");
   let data= await dbConnect();
   let result=await data.deleteOne({name:'Max-7'});
   //deleteOne=one data delete
   //deleteAll=all data deleted
   console.warn(result);
   if(result.acknowledged)
   {
    console.warn("\n Record Deleted Sucessfully.");
   }
}

mongoDelete();