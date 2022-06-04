// in this we create a new database file in which we put all connections together
//and simply use taht code whenever u want



// const a=dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })

const dbConnect=require('./mongoDB'); // import dbConnect from mongoDB.js file 
const main= async ()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.warn(data);
}

main();
