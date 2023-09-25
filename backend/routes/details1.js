const express=require("express")
const bodyParser=require("body-parser")
const router=express.Router();
const app=express()
const multer=require("multer");
//const db=require("../DBConnection.js")
const profileSchema=require("../models/profileSchema.js")
const fs=require("fs")

app.use(bodyParser.json()); 
//connecting db
//db();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

//profile api
/*router.post("/details",(req,res)=>{
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

})*/

router.post("/",upload.single("testimage"),(req,res)=>{
    console.log("path is ",req.path)
    const username=req.body.username;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const phone=req.body.phone;
    const gender=req.body.gender;
    const category=req.body.category;
    const address=req.body.address;
    const image=req.file;
    //const profileModel=req.body.category;
    //console.log(username,firstname,lastname,email,phone,gender,category,address,image);
    console.log(req.body);
    /*const newProfile=new profileSchema({username:username,firstname:firstname,lastname:lastname,email:email,phone:phone,gender:gender,category:category,address:address,image:{data:fs.readFileSync("images/"+req.file.filename),contentType:"image/jpeg"}})
    newProfile.save()
    .then((res)=>{
        console.log("profile data entered into mongodb successfully")
    })
    .catch((err)=>{
        console.error("error occured",err)
    })*/
})

module.exports=router