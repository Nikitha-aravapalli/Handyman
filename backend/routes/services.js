const express=require("express")
const router=express.Router()
const db=require("../DBConnection")
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/myRegisterDb'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);
const profile=require("../models/profileSchema")

//dbconnection
db()
router.post("/",(req,res)=>{
    const service=req.body.service;
    profile.find({category:service})
    .then((users)=>res.send(users))
    .catch((err)=>res.json(err))
})

module.exports = router;