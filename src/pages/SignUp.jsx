import React, { useState } from "react";
import LoginCover from "../assets/signupimg.png";
import Logo from "../assets/logo.png"
import styles from "../signin.module.css"

function Signup() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [city,setCity]=useState('')
    const [ZIP,setZIP]=useState('')
    const [state,setState]=useState('')
    const [rememberMe,setRememberMe]=useState(false)


    function handleEmail(event){
        setEmail(event.target.value)
    }

    function handleUsername(event){
      setUsername(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }
    function handleRemember(){
        setRememberMe(true);
    }
    function handleState(event){
        setState(event.target.value)
    }
    function handleCity(event){
        setCity(event.target.value)
    }
    function handleSubmit(){
      
    }

    return (
      <div className={styles.container} style={{ display: "flex" }}>
        <div className="image">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
            <img
          
              src={LoginCover}
              alt="Signup"
              style={{ maxHeight: "100vh",gap:'20px', objectFit: "cover" }}
            />
          </div>
        </div>
  
        <div className={styles.signupform}>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" style={{width:"100%"}}>
            <div className={styles.logo}>
              <img src={Logo} alt="Logo" />
            </div>
  
            <h3 className={styles.loginHeader}>Sign in</h3>
  
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
  
            <label htmlFor="inputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              placeholder="Enter your username"
              onChange={handleUsername}
              value={username}
            />
  
            <label htmlFor="inputPassword5" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={handlePassword}
              value={password}
            />
  
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
                onChange={handleRemember}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
                style={{ textAlign: "center" }}
              >
                Remember me
              </label>
            </div>
  
            <div className="col-md-12">
              <label htmlFor="validationDefault03" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                onChange={handleCity}
                valuee={city}
                required
              />
            </div>
  
            <div className="col-md-12">
              <label htmlFor="validationDefault04" className="form-label">
                State
              </label>
              <select className="form-select"
               id="validationDefault04"
               onChange={handleState}
               value={state}
               required>
                <option value="" disabled>
                  Choose...
                </option>
                <option>TamilNadu</option>
                <option>Kerala</option>
                <option>Karantaka</option>
              </select>
            </div>
  
            <div className="col-md-12 py-4">
              <label htmlFor="validationDefault05" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
  
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark w-100"
               type="submit"
               onClick={handleSubmit}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Signup;