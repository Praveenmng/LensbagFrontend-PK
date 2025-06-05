// YourBag.jsx
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RentedProducts from "../Components/RentedProducts";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function YourBag() {
  const { login } = useUser();
  const [rentedProducts, setRentedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      alert("You have to login first to view your rented products.");
      navigate("/home");
    } else {
      axios
        .get("/api/rented_products", { withCredentials: true })
        .then((res) => setRentedProducts(res.data))
        .catch((err) => console.error("Error fetching rented products:", err));
    }
  }, [login, navigate]);

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Your Rented Products</h2>
        {rentedProducts.length > 0 ? (
          rentedProducts.map((product, index) => (
            <RentedProducts key={index} product={product} />
          ))
        ) : (
          <p>No products rented yet.</p>
        )}
      </div>
    </div>
  );
}

export default YourBag;
