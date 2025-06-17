import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCards from "../Components/ProductCards";
import SearchSection from "../Components/SearchSection";
import axios from "../axiosInstance"; // Adjust the import path as necessary
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Products() {
  const { login, ecompanyId } = useUser();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!login) {
      alert("Sign Up or Login to Explore More");
      navigate("/home");
    }
  }, [login, navigate]);

  useEffect(() => {
    axios
      .get("/api/products", {
        params: { excludeEcompanyId: ecompanyId || null },
        withCredentials: true,
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [ecompanyId]);

  // 🔍 Callback to receive searched products
  function handleSearchResults(results) {
    setProducts(results);
  }

  return (
    <div>
      <Header />

      <SearchSection onSearchResults={handleSearchResults} />

      <div className="container d-flex mt-3" style={{gap:"4px"}}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.length > 0 ? (
            products.slice(0, 4).map((product, index) => (
              <ProductCards
                key={index}
                id={product.id}
                image={product.image_url}
                title={product.product_name}
                description={product.description}
              />
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Products;
