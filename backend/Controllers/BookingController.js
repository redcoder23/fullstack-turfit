const express=require("express") ;
const Booking=require("../models/Booking"); 
const authMiddleware=require("../middlewares/authmiddleware"); 
const BookingRouter=express.Router();  

BookingRouter.post("/book",authMiddleware,async(req,res)=>{ 
    try {
        const{turfId,date,slot}=req.body; 
        const booking=await Booking.create({ 
            user:req.user._id,
            turf:turfId, 
            date, 
            slot,
        }); 
        res.status(201).json(booking);
    } 
    catch(error) 
    {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Slot already booked" });
          }
      
          res.status(500).json({ message: "Server error" });
      
    } 
}); 
module.exports=BookingRouter;