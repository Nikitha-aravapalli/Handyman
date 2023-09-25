const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser= require("body-parser");
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myRegisterDb",{useNewUrlParser:true,useUnifiedTopology:true})

const userSchema= new mongoose.Schema({
    username1:String,
    email1:String,
    password1:String,
})

const profileDetailsSchema=new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    Email:String,
    phonenumber:String,
    gender:String,
    category:String,
    Address:String,
    image:File 
})

const Customer= new mongoose.model("Customer",userSchema);
const Provider= new mongoose.model("Provider",userSchema);
const Carpentry=new mongoose.model("Carpentry",profileDetailsSchema);
const Plumber=new mongoose.model("Plumber",profileDetailsSchema);
const Electrician=new mongoose.model("Electrician",profileDetailsSchema);

const modelMap = {
    "/CustomerRegister": Customer,
    "/ProviderRegister": Provider,
  };
//customer

//customer register
app.post(["/CustomerRegister","/ProviderRegister"],(req,res)=>{
    //var userModel=null;
    console.log("path is ",req.path);
    const userModel = modelMap[req.path];
    const username=req.body.username1;
    const email=req.body.email1;
    const password=req.body.password1;
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

//login
app.get("/CustomerLogin",(req,res)=>{
    res.send("login page");
})
const modelMap1 = {
    "/CustomerLogin": Customer,
    "/ProviderLogin": Provider,
  };
app.post(["/CustomerLogin","/ProviderLogin"],(req,res)=>{
    console.log(req.body)
    const userModel=modelMap1[req.path];
    const email=req.body.email;
    const password=req.body.password;
    console.log(email)
    console.log(password)
    userModel.findOne({email1:email})
    .then((user)=>{
        var user1=user;
        console.log("nikitha",user)
        if(!user1)
        {
            console.log("user does not exist please register")
            res.send({message:"user does not exists please register",message1:"user"})
        }
        else if (user.password1==password){
            console.log("password is correct")
            res.send({message:"Login successfull",message1:"successful"})
        }
        else{
            console.log("password is incorrect")
            res.send({message:"Password is incorrect",message1:"password"})
        }
    }
    )
})

//reset Password

app.post("/forgot",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const resetPassword=req.body.resetPassword;  
})

//profile 

app.post("/details",(req,res)=>{
    const username=req.body.username;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const phone=req.body.phone;
    const gender=req.body.gender;
    const category=req.body.category;
    const address=req.body.address;
    const profileModel=req.body.category;
    if(profileModel){
        profileModel.find({username:username})
        .then((user)=>{
            if(user){
                res.send({message:"username already exists"})
            }
            else if(category==="carpentry"){
                const newUser=new Carpentry({username:username,firstname:firstname,lastname:lastname,email:email,phone:phone,gender:gender,address:address})
                newUser.save()
                .then(console.log("data stored successfully"))
                .catch((err)=>console.log(err))
            }
            else if(category==="plumber"){
                const newUser=new Plumber({username:username,firstname:firstname,lastname:lastname,email:email,phone:phone,gender:gender,address:address})
                newUser.save()
                .then(console.log("data stored successfully"))
                .catch((err)=>console.log(err))
            }
            else if(category==="electrician"){
                const newUser=new Electrician({username:username,firstname:firstname,lastname:lastname,email:email,phone:phone,gender:gender,address:address})
                newUser.save()
                .then(console.log("data stored successfully"))
                .catch((err)=>console.log(err))
            }
        }
        )
        .catch((err)=>console.log(error))
    }

})

app.listen(5000,()=>{
    console.log("port listening in the port 5000")
})