
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'
import ProfileDropDown from "./ProfileDropdown"
import { Link } from "react-router-dom";

function Header() {
  const [isLogged, setLogin] = useState(false);
  const [username, setUsername] = useState('');



  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLogged');
    const storedUsername = localStorage.getItem('username');

    if (loggedInStatus === 'true' && storedUsername) {
      setLogin(true);
      setUsername(storedUsername);
    }
  }, []);
  function handleLogout() {
    console.log("User Logged out")
    localStorage.removeItem("isLogged")
    localStorage.removeItem("username")
    window.location.reload();
  }
  return (
    <div className="d-flex flex-wrap align-items-center justify-space-between justify-content-md-between py-3 mb-4 border-bottom" style={{ margin: '2%' }}>
      <div className="col-md-3 mb-2 mb-md-0">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/Home" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/products" className="nav-link px-2 link-secondary">Products</Link></li>
        <li><Link to="/wishlist" href="#" className="nav-link px-2 link-secondary">Bag</Link></li>
        <li><Link to="/productuploadform" className="nav-link px-2 link-secondary">Your store</Link></li>
      </ul>
      <div className="col-md-3 text-end">
        {!isLogged ? <div>
          <Link to="/login">
            <button type="button" className="btn btn-outline-dark me-2" >Login</button>
          </Link>
          <Link to="/signUp">
            <button type="button" className="btn btn-dark">Sign-up</button>
          </Link>

        </div>
          :
          <div>
           
            <span><ProfileDropDown
            handleLogout={handleLogout}/></span>
            {/* <button className="btn btn-outline-dark" onClick={handleLogout}>Logout</button> */}
          </div>
        }

      </div>

    </div>
  );
}

export default Header;
