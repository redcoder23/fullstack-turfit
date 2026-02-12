import { useContext, useState } from "react";
import "./CSS/Login.css";
import {Link} from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

import Usercontext from "../../Contexts/Usercontext";
const Login = () => {  
  
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[name,setname]=useState(""); 
  const[loading,setloading]=useState(false) ; 
  const [signed,setsigned]=useState(false);   
  const{setuser}=useContext(Usercontext); 
  const valuser={ 
    email,password,name
  } ; 
 const navigate=useNavigate();
  const handleSubmit=async(e)=>{  
    e.preventDefault() ; 
    setloading(true);  
    try{ 
     const response=await fetch(`http://localhost:5000/api/user/login`,{ 
      method:"POST",
      headers:{ 
        "Content-Type":"application/json",
      } , 
      body:JSON.stringify(valuser),
     }) ;  
           const data=await response.json(); 
     if(response.ok) 
     {    
      console.log(data); 
      localStorage.setItem("token",data.token); 
      setuser(data.user); 
      navigate("/user/home");
       alert("Login successful!"); 
     }
     else 
     alert(data.message);

    } 
    catch(error) 
    { 
      console.log("Error",error);
    } 
    setloading(false);
  };

  return (
    <div className="login-card" style={{color:"black"}}>
      <h1>Sign in</h1>
 
 <form onSubmit={handleSubmit}>

        <div className="form-group loginemail">
    <label>Email</label>
    <input type="email"  
    placeholder="Enter email"   
    value={email} 
    onChange={(e)=>setemail(e.target.value)} 
    required
    />
  </div>

      <div className="form-group loginpassword">
        <label>Password</label>
        <input type="password"  
        placeholder="Enter password" 
        value={password} 
        onChange={(e)=>setpassword(e.target.value)} 
        required   
        />
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>

      <button type="submit" disabled={loading}> 
         {loading ?"Signing In..":"Sign In"}       
         </button>
        </form>
                

      <p className="register">
        Don&apos;t have an account? {" "} 
        <Link to="/user/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
