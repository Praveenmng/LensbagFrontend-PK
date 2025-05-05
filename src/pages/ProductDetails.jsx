import React from "react";
import Header from "../Components/Header";
import SearchSection from "../Components/SearchSection";
import RatingComponent from "../Components/ratings";
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoColumn from "../Components/InfoColumn";
import AddressInfo from "../Components/Address";
import UserReview from "../Components/UserReview";
import ProductCards from "../Components/ProductCards";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useParams } from 'react-router-dom';




function ProductDetails({ products }) {
    const { id } = useParams();
    console.log("Extracted ID:", id);

    const selectedProduct = products.find((item) => item.id === parseInt(id))
    if (!selectedProduct) {
        console.log("No product found for id:", id);
        return <h4>Product not found</h4>
    }

    const handleRentClick = (e) => {
        e.stopPropagation();
        console.log(`Navigating to /rentalrequest/${selectedProduct.id}`);

        navigate(`/rentalrequest/${selectedProduct.id}`);
    };


    return (
        <div>
            <Header />
            <SearchSection />
            <div className="container mt-5">
                <div className="row">

                    <div className="col-lg-6">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>


                    <div className="col-lg-6 d-flex flex-column justify-content-start">
                        <h1>{selectedProduct.title}</h1>
                        <p id="owner">E company name - Owned by seller name</p>
                        <RatingComponent />
                        <p className="mt-2">{selectedProduct.description}</p>
                        <h4 className="Price">{selectedProduct.price}</h4>
                        <div className="butbuttons d-flex gap-2 mt-2">

                            <button type="button"
                                onClick={handleRentClick}
                                className="btn btn-dark">Rent now</button>

                            <button type="button" className="btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>&nbsp;
                                Add to list
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            <InfoColumn />
            <AddressInfo />
            <UserReview />
            <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                {products.map((product, index) => (
                    <ProductCards
                        id={product.id}
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
            </div>
            <Footer />

        </div>

    );
}

export default ProductDetails;

