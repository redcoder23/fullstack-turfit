const express=require("express");
const mongoose=require("mongoose");
const connecttomongouri = require("./db"); 
const cors=require('cors');
const PORT=5000;
const app=express();
app.use(express.json()); 
app.use(cors());
connecttomongouri(); 

app.use('/api/user',require('./routes/UserRoutes/UserRouter'))

app.listen(PORT,()=>{ 
    console.log(`server is Running on ${PORT}`);
}) 
