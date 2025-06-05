import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import RatingComponent from "../Components/ratings";
import { useParams } from "react-router-dom";
import TermsCheckbox from "../Components/Term";
import axios from "axios";
import { useUser } from "../context/UserContext";

function RentalRequest() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [date, setDate] = useState({ fromDate: "", toDate: "" });
    const [termsAccepted, setTermsAccepted] = useState(false);

    const{userName,ogin}=useUser();
    useEffect(() => {
        if (!login) {
          alert("You have to login first to view your rented products.");
          navigate("/home");
        }
    })

       useEffect(() => {
        axios
            .get(`/api/products/${id}`, { withCredentials: true })
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching product by ID:", err));
    }, [id]);
    function handleChange(e) {
        setDate({ ...date, [e.target.name]: e.target.value });
    }

    function handleTermsChange(isChecked) {
        setTermsAccepted(isChecked);
    }

    const handleSendRequest = async () => {
        if (!termsAccepted) {
            alert('You must accept the terms and conditions before sending the request.');
            return;
        }

        try {
            await axios.post('/api/rental_requests', {
                product_id: product.id,
                requested_start_date: date.fromDate,
                requested_end_date: date.toDate,
                requester_name: userName
              }, {
                withCredentials: true
              });
              
            
            alert('Rental request sent! Product owner will contact you in a moment');
        } catch (err) {
            console.error('Error sending request:', err);
            alert('Failed to send rental request.');
        }
    };

    if (!product) return <h4>Loading product...</h4>;

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src={`http://localhost:5000/uploads/${product.image_url}`}
                            alt={product.product_name}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-start">
                        <h1>{product.product_name}</h1>
                        <h5 id="owner">{product.ecompany_name} - Owned by {product.seller_name}</h5>
                        <RatingComponent />

                        <label htmlFor="fromDate mt-4">
                            <h6>From Date:</h6>
                            <input
                                type="date"
                                name="fromDate"
                                id="fromDate"
                                onChange={handleChange}
                                value={date.fromDate}
                                className="form-control mb-2"
                            />
                        </label>

                        <label htmlFor="toDate">
                           <h6>To Date:</h6> 
                            <input
                                type="date"
                                name="toDate"
                                id="toDate"
                                onChange={handleChange}
                                value={date.toDate}
                                className="form-control mb-2"
                            />
                        </label>

                        <h4>Rs.{product.price}/day</h4>
                        <h6>Address to pick up your camera</h6>
                        <p>{product.company_address}</p>

                        <TermsCheckbox onAcceptChange={handleTermsChange} />
                        <button className="btn btn-dark" onClick={handleSendRequest}>
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RentalRequest;
