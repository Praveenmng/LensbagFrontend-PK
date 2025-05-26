import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddButton from "../assets/Addbt.png";
import { useNavigate } from 'react-router-dom';
import ProductCard from "../Components/ProductCards";
import { useUser } from "../context/UserContext";


function YourStore() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { login,hasECompany } = useUser();

  useEffect(() => {
    if (!login) {
      alert("You need to login first.");
      navigate("/home");
      return;
    }

    if (!hasECompany) {
      alert("You need to register your Ecompany.");
      navigate("/ecompany");
      return;
    }

    // If both true, stay here (YourStore or wherever this component is used)
  }, [login, hasECompany, navigate]);

  

 
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      if (!res.ok) {
        setProducts([]);
        return;
      }
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="container text-center mb-4">
        <img
          src={AddButton}
          alt="Add Button"
          style={{ cursor: 'pointer', width: '150px' }}
          onClick={() => navigate("/productuploadform")}
        />
      </div>

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.length === 0 ? (
              <p className="text-center">No products uploaded yet.</p>
            ) : (
              products.map((product, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <ProductCard
                    name={product.productName}
                    description={product.description}
                    image={product.preview}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default YourStore;
