import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import  { useEffect, useState } from "react";
import ProductCards from "../Components/ProductCards"
import SearchSection from "../Components/SearchSection";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';


function Products() {
  const { login,ecompanyId } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {if (!login) {alert("Sign Up or Login to Explore More"); navigate("/home"); }}, [login, navigate]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products", {
      params: {
        excludeEcompanyId: ecompanyId || null
      },
      withCredentials: true
    })
    .then((res) => setProducts(res.data))
    .catch((err) => console.error("Error fetching products:", err));
  }, [ecompanyId]);

  return (
    <div>
      <Header />
      <SearchSection />

      <div className="container1">
        {products.slice(0, 4).map((product, index) => (
          <ProductCards
            key={index}
            id={product.id}
            image={product.image_url}
            title={product.product_name}
            description={product.description}
          />
        ))}

      </div>
      {/* <div className="container2">
        {products.map((product, index) => (
          <ProductCards
            id={product.id}
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div> */}
      <Footer />
    </div>
  )
}
export default Products;