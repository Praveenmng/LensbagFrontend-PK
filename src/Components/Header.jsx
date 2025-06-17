import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import ProfileDropDown from "./ProfileDropDown";
import axios from "../axiosInstance"; // Adjust the import path as necessary
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

import NotificationDropdown from './Notifications';

function Header() {
  const { login,userName, refreshUserStatus} = useUser();

  
  
  

  function handleLogout() {
    axios.post("/api/users/logout", {}, { withCredentials: true })
      .then(() => {
        console.log("Logged out successfully");
        refreshUserStatus();
        
      })
      .catch(err => {
        console.error("Logout failed:", err);
      });
  }
  
  return (
<nav className="navbar navbar-expand-md navbar-light bg-white border-bottom px-3 py-3">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    
    {/* Logo */}
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="Logo" style={{ maxHeight: '80px' }} />
    </Link>

    {/* Toggler + Notification (Mobile Only) */}
    <div className="d-md-none d-flex align-items-center gap-2">
      {/* Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Notification for Mobile */}
      {login && <NotificationDropdown />}
    </div>

    {/* Collapsible Content */}
    <div className="collapse navbar-collapse" id="navbarContent">
      {/* Nav Links */}
      <ul className="navbar-nav mx-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/yourbag">Your Bag</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/yourstore">Your Store</Link>
        </li>
      </ul>

      {/* Mobile: Account Info or Login/Signup - aligned with nav */}
      <ul className="navbar-nav d-md-none">
        {login ? (
          <>
            <li className="nav-item">
              <span className="nav-link">Welcome {userName}!</span>
            </li>
            <li className="nav-item">
              <ProfileDropDown handleLogout={handleLogout} dropdownClass="dropdown-menu-end" />
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button type="button" className="btn btn-outline-dark btn-sm w-100">Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                <button type="button" className="btn btn-dark btn-sm w-100">Sign-up</button>
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Desktop: Account Info */}
      <div className="d-none d-md-flex align-items-center gap-2">
        {login ? (
          <>
            <p className="m-0">Welcome {userName}!</p>
            <ProfileDropDown handleLogout={handleLogout} dropdownClass="dropdown-menu-end" />
            <NotificationDropdown />
          </>
        ) : (
          <>
            <Link to="/login">
              <button type="button" className="btn btn-outline-dark btn-sm">Login</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-dark btn-sm">Sign-up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  </div>
</nav>




  
  
  
  );
}

export default Header;
