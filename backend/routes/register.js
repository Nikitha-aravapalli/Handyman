const express=require("express");
const router=express.Router();

//importing database connection and schema for the collection
const db= require("../DBConnection.js")
const {Customer,Provider}=require("../models/registerSchema.js")

//connection to the database
db()

//used to dynamically select the collection based on the route
const modelMap = {
    "/CustomerRegister": Customer,
    "/ProviderRegister": Provider,
  };

//register api for both customers and providers
router.post(["/CustomerRegister","/ProviderRegister"],(req,res)=>{
    //var userModel=null;
    console.log("path is ",req.path);
    const userModel = modelMap[req.path];
    const username=req.body.username1;
    const email=req.body.email1;
    const password=req.body.password1;
    //const token=req.body.token;
    console.log("user model is ",userModel);
    if(!userModel){
        console.log("userModel not initialized");
    }
    userModel.findOne({email1:email})
    .exec() 
    .then((user)=>{
        if(user){
            res.send({message:"user already exists",message1:"nouser"})
            console.log("user already exists")
        }
        else{
            const newUser=new userModel({username1:username,email1:email,password1:password})
            newUser.save()
            .then(()=>{
                console.log("data stored into mongodb successfully")
                res.send({message:"user created successfully",message1:"user"})
            })
            .catch((err)=>console.error("error while saving",err))
        }
    }
    )
    .catch((err) => console.error("error while finding", err));
})

//exporting the api to the another file
module.exports=router;

