import React from "react";
import Header from "../Components/Header";
import RentedProducts from "../Components/RentedProducts";
import { useUser } from "../context/UserContext";


function YourBag() {

    const {login}=useUser();


    useEffect(()=>{
        if(!login){
            alert("You have login first to create Ecompany")
            navigate("/home")
        }
    })

 
    return (
        <div>
            <Header />
            <div className="container mt-4">
                {/* <h2 className="mb-4">Your Rented Products</h2>
                {rentedProducts.length > 0 ? (
                    rentedProducts.map((product, index) => (
                        <RentedProducts key={index} product={product} />
                    ))
                ) : (
                    <p>No products rented yet.</p>
                )} */}
                <RentedProducts/>
            </div>

        </div>
    )


}


export default YourBag; 