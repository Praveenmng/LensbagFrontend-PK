import React from "react"
import { Link } from "react-router-dom";
function ProfileDropDown(props) {


    return (
        <div>
            <div className="dropdown text-end">
                <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small">
                    <li>
                        <Link to="/profilesettings" classNameName="dropdown-item">
                            Settings
                        </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={props.handleLogout} href="#">Sign out</a></li>
                </ul>
            </div>

        </div >
    )
}
export default ProfileDropDown;