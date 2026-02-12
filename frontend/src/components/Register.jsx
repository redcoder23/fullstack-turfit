import { useState } from "react";
import "./CSS/Register.css";
import { Link } from "react-router-dom";
const Register = () => { 

  const[password,setpassword]=useState(""); 
  const[name,setname]=useState(""); 
  const[email,setemail]=useState(""); 
  const [loading,setloading]=useState(false);    
const user={password,name,email};
  const handleSubmit=async(e)=>{ 
    e.preventDefault(); 
    try
    { 
       const response=await fetch("http://localhost:5000/api/user/signup",{ 
         method:"POST",
         headers:{ 
           "Content-Type":"application/json" 
         },  
         body:JSON.stringify(user),
       });   
       const result=await response.json();  
       console.log(result); 
       if(response.ok) 
        alert("registered succesfully"); 
      else 
      alert(result.message);

    }
     catch(error) 
     {
       console.log("error",error); 
     }
  }
  return (
    <div className="Register-card" style={{color:"black"}}>
  <h1>Register</h1>
  
  <form onSubmit={handleSubmit}> 
  <div className="form-group">
    <label>Username</label>
    <input type="text" 
     placeholder="Enter user name" 
     value={name} 
     onChange={(e)=>setname(e.target.value)} 
     required  
    />
  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="password" placeholder="Enter password"  
    value={password} onChange={(e)=>setpassword(e.target.value)} 
    required/>
  </div>

  <div className="form-group">
    <label>Email</label>
    <input type="email" placeholder="Enter email" 
    value={email}   
    onChange={(e)=>setemail(e.target.value)}
    required />
  </div>

  <button type="submit" disabled={loading}>{loading?"Registering...":"Register"}</button>
  </form>
   

  <p className="register-link"></p>
  <Link to="/user/Login">SignIn</Link>
</div>

  );
};

export default Register;
