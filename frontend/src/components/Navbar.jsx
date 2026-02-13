import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usercontext from "../../Contexts/Usercontext";
import logo from "../image/Turfit.ico";
import day from "../image/day.png";
import night from "../image/night.png"; 
import searchw from "../image/search-w.png" 
import searchb from "../image/search-b.png"; 
 import './CSS/Navbar.css';
function Navbar(props) { 
  const{
   theme,settheme
  }=props;
     const togglemode=()=>{ 
      theme=='light'? settheme('dark'): settheme('light');
     }
    const navigate=useNavigate();
    const {user,setuser}=useContext(Usercontext);
    const handlelogout=()=>{  
        setuser(null);
       localStorage.removeItem("token"); 
       navigate("/user/login");
    }

  return ( 
      <div className="navbar">  
      <img src={logo} alt="" className="logo"/>
        <ul>  
            <li>Home</li> 
            <li>Products</li>
            <li>features</li>
            <li>About</li>
        </ul> 
        <div className="search-box"> 
            <input type="text" placeholder="search"></input> 
            <img src={theme=='light'? searchw:searchb} alt=""/>
        </div>  
      
       <img onClick={()=>{togglemode()}} src={theme=='light'? night:day} alt="" className="toggle-icon"/>
      
      </div>
  );
}

export default Navbar;
