import React, { useEffect, useState } from "react"
import { useUser } from "../context/UserContext";
import styles from "../profile.module.css"
import profileimage from "../assets/eCompanyPic.png";
import logo from "../assets/logo.png"
import axios from "../axiosInstance"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
// import Header from "../Components/Header";

function Ecompany() {
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [EcompanyName, setEcompanyName] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [phoneNumber, setphoneNumber] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [pincode, setPincode] = useState();
    const navigate = useNavigate();

    const { login, userId, hasECompany, setHasECompany, setEcompanyId } = useUser();

    useEffect(() => {
        if (!login) {
            alert("You have login first to create Ecompany")
            navigate("/home")
        }
        if (hasECompany) {
            alert("Already Ecompany Registered");
            navigate("/yourstore")
        }
    })


    function handleSubmit(event) {
        event.preventDefault();
        const ecomp = {
            first_name: fname,
            last_name: lname,
            ecompany_name: EcompanyName,  // <-- key is ecompany here
            available_products: selectedItems,
            phone_number: phoneNumber,
            address,
            city,
            zip: pincode,
            user_id: userId,
        };


        axios.post("api/user/ecompany", ecomp, { withCredentials: true }) // add withCredentials if using sessions
            .then(function (response) {
                console.log("Ecompany Registration successful:", response.data);
                setHasECompany(true);
                setEcompanyId(response.data.id);  // <-- Save ecompany ID here
                navigate("/productuploadform");
            })
            .catch(function (error) {
                console.error("Error during Ecompany Registration:", error);
                alert("Ecompany Registration Failed. Please try again.");
            });
    }




    function handleChange(event) {
        const { id, checked } = event.target;
        if (checked) {
            setSelectedItems([...selectedItems, id]);
        }
        else {
            setSelectedItems(selectedItems.filter(item => item !== id));
        }

    }
    function handleFirstName(event) {
        setfname(event.target.value)
    }
    function handleLastName(event) {
        setlname(event.target.value)
    }
    function handleEcompanyName(event) {
        setEcompanyName(event.target.value)
    }
    function handlePhoneNumber(event) {
        setphoneNumber(event.target.value)
    }
    function handleAddress(event) {
        setAddress(event.target.value)
    }
    function handleCity(event) {
        setCity(event.target.value)
    }   
    function handlePincode(event) {
        setPincode(event.target.value)
    }


    return (

        <div>
            {/* <Header /> */}

            <div className={styles.container}>
                <div className={styles.left}>
                    <img
                        src={profileimage}
                        alt="Signup"
                        className={styles.coverImage}
                    />
                </div>

                <div className={styles.signupform}>
                    <div className={styles.innerform}>
                        <div className={styles.logo}>
                            <img src={logo} alt="Logo" />
                        </div>

                        <h3 className={styles.headline}>Start your e-company</h3>

                        <form onSubmit={handleSubmit}>
                            {/* First & Last Name */}
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Enter First Name"
                                        onChange={handleFirstName}
                                        value={fname}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Enter Last Name"
                                        onChange={handleLastName}
                                        value={lname}
                                        required
                                    />
                                </div>
                            </div>

                            {/* E-Company Name */}
                            <div className="mb-3">
                                <label htmlFor="eCompanyName" className="form-label">E-Company Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="eCompanyName"
                                    placeholder="Enter Your E-Company Name"
                                    onChange={handleEcompanyName}
                                    value={EcompanyName}
                                    required
                                />
                            </div>

                            {/* List of Items */}
                            <div className="mb-3">
                                <label className="form-label">List of Items You Have</label>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="camera" />
                                    <label className="form-check-label" htmlFor="camera">Camera</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="lens" />
                                    <label className="form-check-label" htmlFor="lens">Lens</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="tripod" />
                                    <label className="form-check-label" htmlFor="tripod">Tripod</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="light" />
                                    <label className="form-check-label" htmlFor="light">Light</label>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneNumber"
                                    placeholder="Enter Your Phone Number"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    onChange={handlePhoneNumber}
                                    value={phoneNumber}
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    rows="3"
                                    onChange={handleAddress}
                                    value={address}
                                    placeholder="Enter Your Address"
                                    required
                                ></textarea>
                            </div>

                            {/* City */}
                            <div className="mb-3">
                                <label htmlFor="City" className="form-label">City</label>
                                <input
                                    className="form-control"
                                    id="City"
                                    onChange={handleCity}
                                    value={city}
                                    type="text"
                                    required
                                />
                            </div>

                            {/* Pincode */}
                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input
                                    className="form-control"
                                    id="pincode"
                                    onChange={handlePincode}
                                    value={pincode}
                                    type="text"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-dark">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Ecompany;