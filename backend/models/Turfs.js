const mongoose=require('mongoose'); 
const turfSchema=new mongoose.Schema({ 
   name:{type:String,required:true},
   location:{type:String,required:true},
   priceperhour:{type:String,required:true}, 
   images:[{type:String}],
   slots:[{type:String}], 
  }, 
  {
    timestamps:true
  }); 

module.exports =mongoose.model('Turf',turfSchema,);