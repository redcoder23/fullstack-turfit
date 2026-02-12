const User = require('../models/Users');
const bcrypt = require("bcryptjs"); 
const jwt=require("jsonwebtoken")

  const signup= async (req, res) => {
    try {
        const { name, password, email } = req.body;
        if (!name || !password || !email)
            return res.status(400).json({ message: 'all fields are required' });
        const ispresent = await User.findOne({ email });
        if (ispresent)
            return res.status(409).json({ message: 'User already exists' });
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        const newuser = await new User({ name, email, password: hashedpassword }).save();
        return res.status(201).json({ message: 'User created' });
    }
    catch (err) {
        return res.status(500).json({ message: 'server error' })
    }
};


//login 
const login= async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ message: 'All fileds are required' });
        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).json({ message: 'No such users exists' });
        const match = await bcrypt.compare(password, user.password);
        if (!match)
            return res.status(401).json({ message: "Invalid password" });
        const token = jwt.sign( 
            {id:user._id}, 
            "mysecretkey", 
            {expiresIn:'1h'}
        );
        return res.status(200).json({message:"Login successful",token:token, 
            user:{id:user._id,name:user.name,email:user.email}
        });
    }
    catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
};  


 module.exports={login,signup};