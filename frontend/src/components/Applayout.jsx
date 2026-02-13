import { useContext} from "react";
import "./CSS/Applayout.css";
import Login from "./Login";
import Register from "./Register"; 
import Home from "./Home";
import mainimg from "../image/main.png";  
import Usercontext from "../../Contexts/Usercontext";
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom";
import ProtectedRoute from "../../Contexts/ProtectedRoute";

function Applayout() {   
  // this breaks routing never do {conditional routing} 
  //  {user && <Route path="/user/home" element={<Home/>}/>}
  const{user,setuser}=useContext(Usercontext);  
  const location=useLocation();  
  const ishome=location.pathname==="/user/home";
  return ( 
    <div className="applayout-container">
       <div className={ishome?"full-section":"left-section"}>
       <Routes>  
        <Route path="/" element={<Login/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/register" element={<Register/>}/>   
      <Route path="/user/home" element={<ProtectedRoute><Home/> </ProtectedRoute>}/>
      </Routes>
      </div > 
      
      {!ishome &&(
      <div
        className="right-section"
        style={{ backgroundImage: `url(${mainimg})` }}
        />)} 
        </div> 
        );
}

export default Applayout;
 
//could have done layout change using useeffect(()=>{fetch('/api/endpoint').then().then()},[user]) 
// but this was slower ,depended on network change