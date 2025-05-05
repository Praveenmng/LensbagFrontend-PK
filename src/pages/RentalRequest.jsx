import React, { useState } from "react"
import Header from "../Components/Header";
import RatingComponent from "../Components/ratings";
import { useParams } from "react-router-dom";

function RentalRequest({ products }) {
    const { id } = useParams();
    console.log("Extracted ID:", id);

    const [date, setDate] = useState({
        fromDate: "",
        toDate: ""
    })


    function handleChange(e) {
        setDate({ ...date, [e.target.name]: e.target.value });
    }

    const selectedRentProduct = products.find((item) => item.id === parseInt(id))
    if (!selectedRentProduct) {
        console.log("No product found for id:", id);
        return <h4>Product not found</h4>;
    }


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


                        
                        


                    </div>
                </div>
            </div>


        </div>
    )
}

export default RentalRequest;