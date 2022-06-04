
const dbConnect=require("./mongoDB");

const insert=async()=>{
    console.log("mongoDB insertaion statrted");
    const db=await dbConnect();
    const result=await db.insertMany(// for insert 1 record use insertOne 
    //and for insert many records in arry use insertMany
        [
        {name:'note-5',brand:'vivo',price:19500,category:'mobile'},
        {name:'Max-7',brand:'vivo2',price:45500,category:'mobile'}
        ]
        );
    if(result.acknowledged){
       console.log("Data inserted in e-comm database") 
    }
}

insert();