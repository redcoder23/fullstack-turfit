const mongoose=require('mongoose'); 
const  bookingSchema=new mongoose.Schema({ 
     user:{ 
        type:mongoose.Schema.Types.ObjectId, 
      ref:"User", 
      required:true, 
     },  

     turf:{ 
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Turf", 
        reqiuired:true,
     },
     date:{ 
        type:String, 
        required:true,
     },
     slot:{ 
        type:String,
        required:true,
     }, 
    },  
    {timestamps:true}
); 

module.exports=mongoose.model("Booking",bookingSchema)