const mongoose=require("mongoose");
const express=require("express");
const mongouri='mongodb://localhost:27017/backendturfit';
const connecttomongouri=async()=>{  
    try{
       await mongoose.connect(mongouri); 
       console.log('connected to db successfully'); 
    } 
    catch(error) 
    {
        console.log("mongoose connection failed:",error);
    }
}
module.exports=connecttomongouri