import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import SearchSection from "../Components/SearchSection";
import RatingComponent from "../Components/ratings";
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoColumn from "../Components/InfoColumn";
import AddressInfo from "../Components/Address";
import UserReview from "../Components/UserReview";
import ProductCards from "../Components/ProductCards";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../Components/Footer";
import axios from "axios";
import { useUser } from "../context/UserContext";

function ProductDetails() {

  const { login} = useUser();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
        if(!login) {
                alert("Sign Up or Login to Explore More");
                navigate("/home");
        }
    });

    useEffect(() => {
        axios
            .get(`/api/products/${id}`, { withCredentials: true })
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching product by ID:", err));
    }, [id]);

  useEffect(() => {
    axios
      .get("/api/products", { withCredentials: true })
      .then(res => setOtherProducts(res.data.filter(p => p.id !== parseInt(id) && p.is_available)))
      .catch(err => console.error("Error fetching other products:", err));
  }, [id]);

  const handleRentClick = (e) => {
    e.stopPropagation();
    navigate(`/rentalrequest/${product.id}`);
  };

  if (!product) {
    return <h4>Loading product details...</h4>;
  }

  return (
    <div>
      <Header />
      <SearchSection />
      <div className="container mt-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-lg-6">
            <img
              src={`http://localhost:5000/uploads/${product.image_url}`}
              alt={product.title}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>

          {/* Product Info */}
          <div className="col-lg-6 d-flex flex-column justify-content-start">
            <h1>{product.title}</h1>
            <h2 id="owner">
              {product.ecompany_name} - Owned by {product.seller_name}
            </h2>
            <RatingComponent />
            <p className="mt-2">{product.description}</p>
            <p><strong>Location:</strong> {product.city}</p>
            <p><strong>Available from:</strong> {new Date(product.from_date).toLocaleDateString()}</p>
            <p><strong>To:</strong> {new Date(product.to_date).toLocaleDateString()}</p>
            <p><strong>Pickup Address:</strong> {product.company_address}</p>
            <h4 className="Price">{product.price}</h4>

            <div className="butbuttons d-flex gap-2 mt-2">
              <button type="button" onClick={handleRentClick} className="btn btn-dark">Rent now</button>
              <button type="button" className="btn btn-outline-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>&nbsp;Add to list
              </button>
            </div>
          </div>
        </div>
      </div>

      <InfoColumn />
      <AddressInfo />
      <UserReview />

      <div className="container mt-5">
        <h3>Recommended Products</h3>
        <div className="d-flex flex-wrap justify-content-between">
          {otherProducts.map((product, index) => (
            <ProductCards
              key={index}
              id={product.id}
              image={   product.image_url}
              title={product.product_name}
              description={product.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;
