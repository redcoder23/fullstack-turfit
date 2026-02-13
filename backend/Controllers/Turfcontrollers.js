const express=require("express"); 
const Turf=require("../models/Turfs"); 

const TurfRouter=express.Router(); 

TurfRouter.get("/turfs",async(req,res)=>{ 
    try{ 
        const turfs=await Turf.find(); 
       res.json(turfs); 
    }
    catch(err) 
    {
        res.status(500).json({message:"server error"});
    }
});   

module.exports=TurfRouter;
