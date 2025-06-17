import React, { useState } from "react";
import axios from "../axiosInstance"; // Adjust the import path as necessary
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
  const[name,setName]=useState("")
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const[address,setAddress]=useState("");

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

  function handleName(event){
    setName(event.target.value)
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

function handleAddress(event){
  setAddress(event.target.value)
}



  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email,
      username,
      password,
      name,
      city,
      state,
      zip,
      phoneNumber,
      address
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
    <div className={styles.container}>
      {/* Left side image */}
      <div className={styles.left}>
        <img
          src={LoginCover}
          alt="Sign Up Visual"
          className={styles.coverImage}
        />
      </div>

      {/* Right side form */}
      <div className={styles.signupform}>
        <div className={styles.formInner}>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>

          <h3 className={styles.loginHeader}>Sign Up</h3>

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
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              onChange={handleUsername}
              value={username}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handlePassword}
              value={password}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              onChange={handlePhoneNumber}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="city"
              onChange={handleName}
              value={name}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="address" className="form-label">Resident Address</label>
            <input
              type="text"
              className="form-control"
              id="city"
              onChange={handleAddress}
              value={address}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              onChange={handleCity}
              value={city}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <select
              className="form-select"
              id="state"
              onChange={handleState}
              value={state}
            >
              <option value="" disabled>Choose...</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              onChange={handleZip}
              value={zip}
            />
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-dark w-100" type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>

          <p
            className="mt-4 text-center text-muted"
            onClick={handleNavigate}
            style={{ cursor: "pointer" }}
          >
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;