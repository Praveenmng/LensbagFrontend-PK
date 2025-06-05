import React from "react";

import axios from "axios";

function RentedProducts({ product }) {
  const returnRequest = () => {
    const confirmReturn = window.confirm(`Are you sure you want to request a return for Order ID: ${product.id}?`);
    if (!confirmReturn) return;

    axios.post("/api/return_requests", {
      rented_product_id: product.id,      // rented_products.id
      product_id: product.product_id,     // products.id
      return_request_date    
    }, { withCredentials: true })
      .then(res => {
        alert("Return request sent to the owner.");
      })
      .catch(err => {
        console.error("Error sending return request:", err);
        alert("Failed to send return request.");
      });
  };

  return (
    <div className="container mt-5 border-bottom pb-4">
      <div className="row">
        <div className="col-lg-6">
          <img
             src={`http://localhost:5000/uploads/${product.image_url}`}
            style={{ width: '90%', height: 'auto', objectFit: 'cover' }}
            alt={product.product_name}
          />
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-start">
          <h1>{product.product_name}</h1>
          <p><strong>{product.ecompany_name}</strong> - Owned by {product.owner_name}</p>
          <h5 className="mt-2 text-success">Rented Out</h5>
          <p><strong>Order ID:</strong> {product.id}</p>
          <p><strong>Rental Date:</strong> {product.rental_date}</p>
          <p><strong>Return Date:</strong> {product.return_date}</p>
          <p><strong>Owner Phone Number:</strong> +91 {product.owner_phone}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <button className="btn btn-dark mt-2" onClick={returnRequest}>
            Return Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default RentedProducts;
