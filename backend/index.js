const express=require("express");
const mongoose=require("mongoose");
const connecttomongouri = require("./db");
const PORT=5000;
const app=express();
app.use(express.json());
// connecttomongouri().then(()=>console.log('connected to db')).catch((error)=>{console.error("mongodb connection failed",error)});  
connecttomongouri();
app.listen(PORT,()=>{ 
    console.log(`server is Running on ${PORT}`);
})