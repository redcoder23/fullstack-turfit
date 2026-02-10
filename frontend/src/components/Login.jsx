import "./CSS/Login.css";
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className="login-card" style={{color:"black"}}>
      <h1>Sign in</h1>

      <div className="form-group">
        <label>User name</label>
        <input type="text" placeholder="Enter user name" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>

      <button>Sign in</button>

      <p className="register">
        Don&apos;t have an account? {" "} 
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
