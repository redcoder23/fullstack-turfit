import "./CSS/Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="Register-card" style={{color:"black"}}>
  <h1>Register</h1>

  <div className="form-group">
    <label>Username</label>
    <input type="text" placeholder="Enter user name" />
  </div>

  <div className="form-group">
    <label>Password</label>
    <input type="password" placeholder="Enter password" />
  </div>

  <div className="form-group">
    <label>Email</label>
    <input type="email" placeholder="Enter email" />
  </div>

  <button>Register</button>
   

  <p className="register-link"></p>
  <Link to="/Login">SignIn</Link>
</div>

  );
};

export default Register;
