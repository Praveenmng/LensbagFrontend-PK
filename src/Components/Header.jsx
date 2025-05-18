import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import ProfileDropDown from "./ProfileDropdown";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

import NotificationDropdown from './Notifications';

function Header() {
  const { login, userName, userId, setLogin, setUserName, setUserId } = useUser();

  useEffect(() => {
    axios.get("/api/user/status")
      .then(response => {
        console.log("User status response:", response.data);
        if (response.data.isLogged && response.data.username) {
          setLogin(true);
          setUserName(response.data.username);
          setUserId(response.data.user_id); 
        } else {
          setLogin(false);
          setUserName(null);
          setUserId(null);
        }
      })
      .catch(error => {
        console.error("Error fetching user status:", error);
        setLogin(false);
        setUserName(null);
        setUserId(null);
      });
  }, []);
  

  function handleLogout() {
    axios.post("/api/users/logout", { username: userName })  // send username only
      .then(() => {
        console.log(`User logged out: username=${userName}`);
        setLogin(false);
        setUserName("");
        setUserId(null);  // optional reset
      })
      .catch(error => console.error("Logout failed:", error));
  }
  
  return (
    <div className="d-flex flex-wrap align-items-center justify-space-between justify-content-md-between py-3 mb-4 border-bottom" style={{ margin: '2%' }}>
      <div className="col-md-3 mb-2 mb-md-0">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/home" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/products" className="nav-link px-2 link-secondary">Products</Link></li>
        <li><Link to="/yourbag" className="nav-link px-2 link-secondary">Your Bag</Link></li>
        <li><Link to="/productuploadform" className="nav-link px-2 link-secondary">Your Store</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        {!login ? (
          <div>
            <Link to="/login">
              <button type="button" className="btn btn-outline-dark me-2">Login</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-dark">Sign-up</button>
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px", flexWrap: "nowrap" }}>
            <p className="mb-1">Welcome {userName}!</p>
            <ProfileDropDown handleLogout={handleLogout} className="dropdown-menu dropdown-menu-start" />
            <NotificationDropdown/>
          </div>
        )}
      </div>

    </div>
  );
}

export default Header;
