import React,{useState} from "react"
import styles from "../login.module.css"
import LoginCover from "../assets/signupimg.png";
import Logo from "../assets/logo.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext"




function LoginPage() {

   const { setLogin, setUserName,setUserId } = useUser(); //setting global
  const navigate=useNavigate();



const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


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
 

axios
      .post("/api/users/login",log)
      .then(function (response) {
        console.log("Login successful:", response.data);
        console.log(log); 
   
        setLogin(true);
        setUserName(response.data.username);
        setUserId(response.data.user_id);
        console.log("User Id: "+response.data.user_id)
        alert("Login successful!");
        navigate("/home");

      })
      .catch(function (error) {
        console.error("Error during login:", error);
        alert("Login failed. Please try again.");
      });
    }

    return (
      <div className={styles.container}>
        <div className="image col-xxl-8 col-xl-8 col-lg-8 col-md-8">
          <img
            src={LoginCover}
            alt="Signup"
            style={{ maxHeight: "100vh", objectFit: "cover" }}
          />
        </div>
  
        <div className={`${styles.signupform} col-xxl-4 col-xl-4 col-lg-4 col-md-4`}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>
  
          <h3 className={styles.loginHeader}>Login</h3>
  
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleEmail}
              value={email}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="inputPassword5" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${styles.form}`}
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              onChange={handlePassword}
              value={password}
            />
          </div>
  
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
  
          <div className="d-flex justify-content-center">
            <button className="btn btn-dark w-100"
             type="submit"
             onClick={handlesubmit}
             >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
export default LoginPage;