const dbConnect=require('./mongoDB');

const updateData=async()=>{
    let data=await dbConnect();
    let result= await data.updateOne(//upadateOne=update One,updateAll=update all data matching
        {name:'note-5'},{
            $set:{name:'Max-Note-9',price:850000}
        }
        
    );
    console.log();
    console.warn(result,'\n Updated data sucesfully');
}

updateData();