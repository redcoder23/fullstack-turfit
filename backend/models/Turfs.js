const mongoose = require('mongoose');

const turfSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },

   location: {
      type: String,
      required: true
   },

   pricePerHour: {   
      type: Number, 
      required: true
   },

   sportsAvailable: [
      {
         type: String
      }
   ],

   images: [
      {
         type: String
      }
   ],

   timeSlots: [
      {
         time: String,
         booked: {
            type: Boolean,
            default: false
         }
      }
   ]

}, {
   timestamps: true
});

module.exports = mongoose.model('Turf', turfSchema);
