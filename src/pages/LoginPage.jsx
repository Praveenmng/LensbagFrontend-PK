import React,{useState} from "react"
import styles from "../login.module.css"
import LoginCover from "../assets/signupimg.png";
import Logo from "../assets/logo.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext"




function LoginPage() {

  const { refreshUserStatus } = useUser();
  const navigate=useNavigate();



const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

function handleNavigate(){
  navigate("/signUp");
}

function handleEmail(event){
setEmail(event.target.value);
}
function handlePassword(event){
  setPassword(event.target.value);
}
function handlesubmit(event){

  event.preventDefault();
 
  const log={
    email,
    password
  };
 

  axios.post("/api/users/login", log, { withCredentials: true })
  .then((res) => {
    console.log("✅ Login response:", res.data);
    refreshUserStatus(); // ✅ Triggers fresh context update immediately
    navigate("/home");
  })
  .catch((err) => {
    console.error(err);
    alert("Login failed");
  });

  };
 

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src={LoginCover}
          alt="Login Visual"
          className={styles.coverImage}
        />
      </div>
  
      <div className={styles.signupform}>
        <div className={styles.formInner}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>
  
          <h3 className={styles.loginHeader}>Login</h3>
  
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={handleEmail}
              value={email}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${styles.form}`}
              id="password"
              onChange={handlePassword}
              value={password}
            />
          </div>
  
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">Remember me</label>
          </div>
  
          <button className="btn btn-dark w-100" onClick={handlesubmit}>
            Login
          </button>
  
          <p
            className="mt-4 text-center text-muted"
            style={{ cursor: "pointer" }}
            onClick={handleNavigate}
          >
            Create your account
          </p>
        </div>
      </div>
    </div>
  );
  
    }
export default LoginPage;
