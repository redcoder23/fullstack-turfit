import { useContext} from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register"; 
import Home from "./components/Home";
import mainimg from "./image/main.png";  
import Usercontext from "../../frontend/Contexts/Usercontext";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProtectedRoute from "../Contexts/ProtectedRoute";

function App() {   
  // this breaks routing never do {conditional routing} 
  //  {user && <Route path="/user/home" element={<Home/>}/>}
  const{user,setuser}=useContext(Usercontext); 
  return ( 
    <div className="app-container">
       <BrowserRouter> 
       <div className="left-section">
       <Routes> 
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/register" element={<Register/>}/>   
      <Route path="/user/home" element={<ProtectedRoute><Home/> </ProtectedRoute>}/>
      </Routes>
      </div>
      <div
        className="right-section"
        style={{ backgroundImage: `url(${mainimg})` }}
        ></div>
        </BrowserRouter>
        </div> 
        );
}

export default App;
