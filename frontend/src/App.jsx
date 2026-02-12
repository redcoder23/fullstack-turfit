import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import mainimg from "./image/main.png"; 
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {       
  return ( 
    <div className="app-container">
       <BrowserRouter> 
       <div className="left-section">
       <Routes> 
        <Route path="/" element={<Login/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/register" element={<Register/>}/>  
        <Route path="/user/home" element={<Home/>}/>
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
