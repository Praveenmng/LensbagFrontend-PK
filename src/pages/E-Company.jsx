import React, { useState } from "react"
import { useUser } from "../context/UserContext";
import styles from "../profile.module.css"
import profileimage from "../assets/eCompanyPic.png";
import logo from "../assets/logo.png"
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Ecompany() {
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [EcompanyName, setEcompanyName] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [phoneNumber, setphoneNumber] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [pincode, setPincode] =useState();
    
    const navigate=useNavigate();
    const { userId } = useUser();
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
        if (!userId) {
          alert("You must be logged in.");
          navigate("/login");
          return;
        }
    
        axios
          .get(`/api/user/ecompany/check/${userId}`)
          .then((response) => {
            if (response.data.exists) {
              alert("You have already registered a company.");
              navigate("/yourstore");
            } else {
              setLoading(false); // <-- DONE CHECKING, SHOW PAGE
            }
          })
          .catch((error) => {
            console.error("Error checking company status:", error);
            setLoading(false); // still allow page in case of error
          });
      }, [userId]);
    
      if (loading) return <p>Checking company status...</p>;

    function handleSubmit(event) {

        event.preventDefault();
        const ecomp = {
            first_name: fname,
            last_name: lname,
            ecompany_name: EcompanyName,
            available_products: selectedItems,
            phone_number: phoneNumber,
            address,
            city,
            zip: pincode,
            user_id: userId
          };
          
        axios.post("api/user/ecompany",ecomp)
        .then(function(response){
            console.log("Ecompany Registration successful:", response.data);
            navigate("/yourstore");

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
           
            <div className={styles.container} style={{ display: 'flex', gap: '20px', padding: '0' }}>
                <div className={styles.image}>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                        <img src={profileimage} alt="Signup Image" style={{ width: '100', maxHeight: '100vh', objectFit: 'cover' }} />

                    </div>

                </div>

                <div className={styles.signupform}>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" style={{ width: '100%' }}>
                        <div className={styles.logo}>

                            <img src={logo} />

                        </div>
                        <h3 className={styles.headline}>Start your e-company</h3>
                        <form onSubmit={handleSubmit}>
                            {/* <!-- First & Last Name --> */}
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Enter First Name"
                                        onChange={handleFirstName}
                                        value={fname}

                                        required />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="lastName"
                                        onChange={handleLastName}
                                        value={lname}
                                        placeholder="Enter Last Name"
                                        required />
                                </div>
                            </div>
                            {/* <!-- E-Company Name --> */}
                            <div className="mb-3">
                                <label htmlFor="eCompanyName" className="form-label">E-Company Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="eCompanyName"
                                    placeholder="Enter Your E-Company Name"
                                    onChange={handleEcompanyName}
                                    value={EcompanyName}
                                    required />
                            </div>
                            {/* <!-- List of Items --> */}
                            <div className="mb-3">
                                <label className="form-label">List of Items You Have</label>
                                <div class="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="camera" />
                                    <label class="form-check-label" htmlFor="camera">Camera</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="lens" />
                                    <label className="form-check-label" htmlFor="lens">Lens</label>
                                </div>
                                <div class="form-check">
                                    <input className="form-check-input" onChange={handleChange} type="checkbox" id="tripod" />
                                    <label className="form-check-label" htmlFor="tripod">Tripod</label>
                                </div>
                                <div className="form-check">
                                    <input class="form-check-input" onChange={handleChange} type="checkbox" id="light" />
                                    <label className="form-check-label" htmlFor="light">Light</label>
                                </div>
                            </div>
                            {/* <!-- Phone Number --> */}
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input type="tel"
                                    className="form-control" id="phoneNumber"
                                    placeholder="Enter Your Phone Number"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    onCanPlay={handlePhoneNumber}
                                    value={phoneNumber}
                                    required />
                            </div>

                            {/* <!-- Address --> */}
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea className="form-control"
                                    id="address" rows="3"
                                    onChange={handleAddress}
                                    value={address}
                                    placeholder="Enter Your Address"
                                    required></textarea>
                            </div>

                            {/* <!-- Pincode --> */}

                            <div className="mb-3">
                                <label htmlFor="City" className="form-label">City</label>
                                <input className="form-control" onChange={handleCity} value={city} type="text" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="pincode" className="form-label">Pincode</label>
                                <input className="form-control" onChange={handlePincode} value={pincode} type="text" required />
                            </div>

                            {/* <!-- Submit Button --> */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-dark">Register</button>
                            </div>
                        </form>






                    </div>
                </div>
            </div >
        </div>



    )
}
export default Ecompany;