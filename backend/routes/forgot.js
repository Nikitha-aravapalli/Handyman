const express=require("express");
const router=express.Router();

//database connection
const db=require("../DBConnection");
db()

//Provider and Customer collection schema
const {Customer,Provider}=require("../models/registerSchema")

const modelMap1={
    "/ProviderForget":Provider,
    "/CustomerForget":Customer
}

router.put(["/ProviderForget","/CustomerForget"],(req,res)=>{
    const path=req.path
    console.log("path is",path)
    console.log("collection is",modelMap1[path])
    const collection=modelMap1[path]
    const email=req.body.email;
    const password=req.body.password;
    const resetPassword=req.body.password;
    console.log(email,password,resetPassword);
    collection.findOne({email1:email})
    .then((user)=>
        {
            if (user){
                collection.updateOne({email1:email},{$set:{password1:password}})
                .then(()=>{console.log("updated successfully in the mongodb")})
                .catch((err)=>{console.log(err);res.send({response:"error occured while updating in db"})})
            }
            else{
                console.log("no user found")
                res.send({response:"No user found,Please register yourself"})
            }
        }
    )
    .catch((err)=>{
        console.log(err)
        res.send({response:"Error occured while finding user"})
    })

})

module.exports=router;