const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    username1:String,
    email1:String,
    password1:String,
    //token:String
})

const Customer= new mongoose.model("Customer",userSchema);
const Provider= new mongoose.model("Provider",userSchema);

module.exports={Customer,Provider}