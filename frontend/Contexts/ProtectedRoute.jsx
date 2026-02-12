import { useContext,setContext} from "react"; 
import { Navigate  } from "react-router-dom";
import Usercontext from "./Usercontext"; 

const ProtectedRoute=({children})=>{ 
    const {user}  =useContext(Usercontext);  
    if(!user)  
    {
        return <Navigate to="/user/login" replace/>; 
    } 
    return children;
};  

export default ProtectedRoute;