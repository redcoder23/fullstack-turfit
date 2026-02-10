const express=require('express');
const mongoose=require('mongoose'); 
const express=require('express'); 
const userRouter=express.Router();
 const User=require('../models/Users');
// post 
userRouter.post('/signup',async(req,res)=>{  
    try{
   const {name,password,email}=req.body(); 
   if(!name || !password || !email) 
    return res.status(400).json({message:'all fields are required'}); 
        const ispresent=await User.findOne({email});  
        if(ispresent) 
            return res.status(409).json({message:'User already exists'}); 
          const newuser= await new User({name,email,password }).save(); 
          return res.status(201).json({message:'User created'});  
    } 
    catch(err) 
    {
        return res.status(500).json({message:'server error'})
    }

});  


//find 