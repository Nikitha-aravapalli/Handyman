const mongoose=require("mongoose");
const db="mongodb://127.0.0.1:27017/myRegisterDb";

const connectDB= async()=>
{
    try{
        await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true});
    }
    catch (err){
        console.error("error while connecting to the database",err);
    }
};


module.exports=connectDB;