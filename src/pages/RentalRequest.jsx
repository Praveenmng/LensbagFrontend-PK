import React, { useState } from "react"
import Header from "../Components/Header";
import RatingComponent from "../Components/ratings";
import { useParams } from "react-router-dom";
import TermsCheckbox from "../Components/Term";
import axios from "axios"


function RentalRequest({ products }) {
    const { id } = useParams();
    console.log("Extracted ID:", id);

    const [date, setDate] = useState({
        fromDate: "",
        toDate: ""
    })
    const [termsAccepted, setTermsAccepted] = useState(false);

    function handleChange(e) {
        setDate({ ...date, [e.target.name]: e.target.value });
    }





    const selectedRentProduct = products.find((item) => item.id === parseInt(id))
    if (!selectedRentProduct) {
        console.log("No product found for id:", id);
        return <h4>Product not found</h4>;
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
                const res = await axios.post('http://localhost:5000/api/rental-requests', {
                    product_id: selectedRentProduct.id,
                    renter_id: 1, // This should be the actual logged-in user ID
                    requested_start_date: date.fromDate,
                    requested_end_date: date.toDate
                });

                alert('Rental request sent!');
            } catch (err) {
                console.error('Error sending request:', err);
                alert('Failed to send rental request.');
            }
        };


        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={selectedRentProduct.image} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="product image" />

                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-start">
                            <h1>{selectedRentProduct.title}</h1>
                            <p id="owner">E company name - Owned by seller name</p>
                            <RatingComponent />

                            <label htmlFor="fromDate mt-4">
                                From Date:
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
                                To Date:
                                <input
                                    type="date"
                                    name="toDate"
                                    id="toDate"
                                    onChange={handleChange}
                                    value={date.toDate}
                                    className="form-control mb-2"
                                />
                            </label>

                            <h4>{selectedRentProduct.price}</h4>
                            <h5>Address to pick up your camera</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure in recusandae repellendus quibusdam culpa totam sit quia mollitia autem!</p>
                            <TermsCheckbox onAcceptChange={handleTermsChange} />
                            <button className="btn btn-dark" onChange={handleSendRequest}>Send Request</button>








                        </div>
                    </div>
                </div>


            </div>
        )
    }


export default RentalRequest;