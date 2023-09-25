const mongoose=require("mongoose")

const profileDetailsSchema=new mongoose.Schema({
    username:String,
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    gender:String,
    category:String,
    address:String,
    experience:String,
    wage:String
    /*image:{
        data:Buffer,
        contentType:String
    }*/
})

const profile=new mongoose.model("providerDetail",profileDetailsSchema)
module.exports=profile;