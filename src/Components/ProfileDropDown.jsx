import React from "react"
import { Link } from "react-router-dom";


function ProfileDropDown(props) {
    return (
      <div>
      <div className="dropdown ms-auto">

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle fs-3"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end text-small">

            <li>
              <Link to="/profilesettings" className="dropdown-item">
                Settings
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item" onClick={props.handleLogout} href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ProfileDropDown;