import React from "react";
import { useNavigate } from 'react-router-dom';
import LikeButton from "../assets/Vector.png";
import CartButton from "../assets/mdi-light_cart.png";

function ProductCards({ id, image, title, description }) {
  const navigate = useNavigate();

  function handleClick(){
    console.log("Navigating to product ID:", id);
    navigate(`/productdetails/${id}`);

  }


  function handleRentClick(event){
    e.stopPropagation(); // prevent card click
    console.log("Navigating to rental request for ID:", id);
    navigate(`/rentalrequest/${id}`);
  }

  return (
    <div className="card" onClick={handleClick} style={{ width: "18rem", cursor: "pointer", margin: "10px" }}>
      <img
        className="card-img-top"
        src={`http://localhost:5000/uploads/${image}`}
        width="288"
        height="169"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn btn-primary"
            style={{ borderColor: "black", backgroundColor: "black" }}
            onClick={handleRentClick}
          >
            Rent now
          </button>

          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
