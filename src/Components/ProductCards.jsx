import React from "react";

import { useNavigate } from 'react-router-dom';
import LikeButton from "../assets/Vector.png"
import CartButton from "../assets/mdi-light_cart.png"

function ProductCards(props) {

    const navigate = useNavigate(); 

    const handleClick = () => {

      

        console.log("Navigating to product ID:", props.id);
        console.log("Generated URL:", `/productdetails/${props.id}`);
        navigate(`/productdetails/${props.id}`);
        

    };
    return (
        <div className="card"  onClick={handleClick}
        style={{ width: "18rem" }}>
         

            <img
                className="card-img-top"
                src={props.image}
                width="288"
                height="168.78"
                alt={props.title}
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
              
                <button
                    className="btn btn-primary"
                    style={{ borderColor: "black", backgroundColor: "black" }}
                >
                    Rent now
                </button>
              
            
            <img src={LikeButton} id="likebutton" alt="Like" />
            <img src={CartButton} id="cartbutton" alt="Cart" />
        </div>
        </div >
        
    );
}

export default ProductCards;

