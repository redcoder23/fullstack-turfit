const jwt=require("jsonwebtoken"); 
const User=require("../models/Users"); 

const authMiddleware=async(req,res,next)=>{ 
  try {
    const authheader=req.headers.authorization ; 
    if(!authheader ) 
        return res.status(401).json({message:'Not authorized'}); 
    const token=authheader?.split(" ")[1];  
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;

    next()
  } 
  catch(error) 
  {
    res.status(401).json({message:"Invalid or expired token"});
  }
} ; 

module.exports=authMiddleware;