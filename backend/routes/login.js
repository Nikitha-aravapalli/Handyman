const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken")

//importing dbconnection and schema
const db=require("../DBConnection.js");
const {Customer,Provider}=require("../models/registerSchema.js")

//db connection
db();

//used to dynamically select the collection based on the route
const modelMap1 = {
    "/CustomerLogin": Customer,
    "/ProviderLogin": Provider,
};

//login api
router.post(["/CustomerLogin","/ProviderLogin"],async (req,res)=>{
    //try{
        console.log(req.body)
        const userModel=modelMap1[req.path];
        //console.log("nikki",userModel)
        const email=req.body.email;
        const password=req.body.password;
        console.log(email)
        console.log(password)
        userModel.findOne({email1:email})
        .then((user)=>{
            var user1=user;
            console.log("nikitha1",user)
            if(!user1)
            {
                console.log("user does not exist please register")
                //res.send({message:"user does not exists please register",message1:"user"})
            }
            else if (user.password1==password){
                console.log("password is correct")
                //res.send({message:"Login successfull",message1:"successful"})
    
                /*const createToken=async()=>{
                    token=await jwt.sign({_id:user._id},"nikitha");
                    console.log("nikitha1",token)
                    const verify=await jwt.verify(token,"nikitha");
                    console.log(verify)
                    
                    console.log("nikitha",token)
                    console.log("id is",user._id);
                    await userModel.updateOne({_id:user._id},{$set:{token:token}})
                    .then(()=>{
                        console.log("token is",user.token)
                        console.log("token added successfully to the mongodb")
                        res.cookie("jwttoken","nikitha")
                        //res.status(200).json({ message: "Token created and set as a cookie" });
                        console.log("Cookie set: jwttoken", token);
                    })
                    .catch((err)=>{
                        console.log("error occured",err)
                    })
                }
                createToken()*/
                let payload={
                    user1:{
                        id:user._id
                    }
                }
                jwt.sign(payload,"jwtsecret",{expiresIn:3600000},
                (err,token)=>{
                    if(err) throw err;
                    console.log(token);
                    return res.json({token})
                })
            }
            else{
                console.log("password is incorrect")
                res.send({message:"Password is incorrect",message1:"password"})
            }
        }
        )    
    //}
    /*catch(err){
        return res.status(500).send("server error");
    }*/

})

module.exports=router;
