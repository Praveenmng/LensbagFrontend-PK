import React from "react";
import RatingComponent from "../Components/ratings";

function RentedProducts({ product }) {
  function returnRequest() {
    alert(`Return requested for Order ID: ${product.order_id}`);
  }

//   return (
//     <div className="container mt-5 border-bottom pb-4">
//       <div className="row">
//         <div className="col-lg-6">
//           <img
//             src={product.product_image}
//             style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//             alt="product"
//           />
//         </div>

//         <div className="col-lg-6 d-flex flex-column justify-content-start">
//           <h1>{product.product_title}</h1>
//           <p id="owner">
//             {product.ecompany_name} - Owned by {product.seller_name}
//           </p>
//           <RatingComponent />
//           <h5 className="mt-2 text-success">Rented Out</h5>
//           <p><strong>Order ID:</strong> {product.order_id}</p>
//           <p><strong>Rental Date:</strong> {new Date(product.rental_date).toLocaleDateString()}</p>
//           <p><strong>Return Date:</strong> {new Date(product.return_date).toLocaleDateString()}</p>
//           <p><strong>Phone Number:</strong> {product.phone_number}</p>
//           <p><strong>Description:</strong> {product.product_description}</p>
//           <button className="btn btn-dark mt-2" onClick={returnRequest}>
//             Return Request
//           </button>
//         </div>
//       </div>
//     </div>
//   );


//Mock data for UI Structure Check

return (
    <div className="container mt-5 border-bottom pb-4">
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://via.placeholder.com/600x400?text=Product+Image"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            alt="product"
          />
        </div>
  
        <div className="col-lg-6 d-flex flex-column justify-content-start">
          <h1>Canon EOS R5</h1>
          <p id="owner">
            PixelRent Co. - Owned by John Doe
          </p>
          <RatingComponent />
          <h5 className="mt-2 text-success">Rented Out</h5>
          <p><strong>Order ID:</strong> ORD-10245-RNT</p>
          <p><strong>Rental Date:</strong> 2025-05-15</p>
          <p><strong>Return Date:</strong> 2025-05-18</p>
          <p><strong>Phone Number:</strong> +91 98765 43210</p>
          <p><strong>Description:</strong> A premium mirrorless camera with 45MP full-frame sensor, ideal for high-end photography and 8K video recording.</p>
          <button className="btn btn-dark mt-2" onClick={returnRequest}>
            Return Request
          </button>
        </div>
      </div>
    </div>
  );
  


}

export default RentedProducts;
