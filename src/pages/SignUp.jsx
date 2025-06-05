import React, { useState } from "react";
import axios from "axios";
import LoginCover from "../assets/signupimg.png";
import Logo from "../assets/logo.png";
import styles from "../signin.module.css";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext"


function Signup() {

  
  const { refreshUserStatus } = useUser();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber,setPhoneNumber]=useState("");

 function handleNavigate(){
  navigate("/login");
 }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleState(event) {
    setState(event.target.value);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleZip(event) {
    setZip(event.target.value);
  }
 function handlePhoneNumber(event){
  setPhoneNumber(event.target.value);
 }
  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email,
      username,
      password,
      city,
      state,
      zip,
      phoneNumber
    };

    axios
    .post("/api/users/register", userData, { withCredentials: true }) // Added for session cookie
    .then(function (response) {
      console.log("Signup successful:", response.data);
  
      refreshUserStatus();
      console.log("User Id: " + response.data.user_id);
      alert("Signup successful!");
      navigate("/home");
    })
    .catch(function (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    });
  }

  return (
    <div className={styles.container} style={{ display: "flex" }}>
      <div className="image">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
          <img
            src={LoginCover}
            alt="Signup"
            style={{ maxHeight: "100vh", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className={styles.signupform}>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" style={{ width: "100%" }}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>

          <h3 className={styles.loginHeader}>Sign Up</h3>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleEmail}
              value={email}
            />
          </div>

          <label htmlFor="inputUsername" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            placeholder="Enter your username"
            onChange={handleUsername}
            value={username}
          />

          <label htmlFor="inputPassword5" className="form-label">Password</label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            onChange={handlePassword}
            value={password}
          />
          <label htmlFor="inputPassword5" className="form-label">Phone Number</label>
          <input
            type="text"
            id="validationDefault03"
            className="form-control"
      
            onChange={handlePhoneNumber}
            value={password}
          />

          <label htmlFor="validationDefault03" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            onChange={handleCity}
            value={city}
            required
          />

          <label htmlFor="validationDefault04" className="form-label">State</label>
          <select
            className="form-select"
            id="validationDefault04"
            onChange={handleState}
            value={state}
            required
          >
            <option value="" disabled>Choose...</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
          </select>

          <label htmlFor="validationDefault05" className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            onChange={handleZip}
            value={zip}
            required
          />

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-dark w-100" type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          
          </div>
          <p className="mt-4" style={{textAlign:"center", color:"GrayText"}} onClick={handleNavigate}>Already have an account?</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;