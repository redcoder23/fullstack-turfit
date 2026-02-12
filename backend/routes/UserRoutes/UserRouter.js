const express=require("express"); 
const {login,signup}=require('../../Controllers/Usercontroller');  
// const authMiddleware=require('../middlewares/auth'); 

const UserRouter=express.Router(); 

UserRouter.post('/signup',signup); 
UserRouter.post('/login',login);


module.exports=UserRouter; 