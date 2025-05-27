import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddButton from "../assets/Addbt.png";
import { useNavigate } from 'react-router-dom';
import ProductOwnerCard from "../Components/productOwnerCard";
import { useUser } from "../context/UserContext";
import axios from "axios";

function YourStore() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { login, hasECompany, userId } = useUser();

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
    if(!userId){
      alert("You need to login first.");
      navigate("/home");
      return;
    }

    fetchOwnerProducts(); // Fetch only after checks
  }, [login, hasECompany, userId]);
  console.log(login,userId,hasECompany)

 
  const fetchOwnerProducts = async () => {
    try {
      console.log("📦 Sending request to fetch owner products");
  
      const res = await axios.get("/api/owner/products", {
        withCredentials: true, // 🔑 sends session cookie
      });
  
      console.log("✅ Response received from backend:");
      console.log("👉 Status:", res.status);
      console.log("👉 Data:", res.data);
  
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("❌ Error fetching owner's products:");
      if (error.response) {
        console.error("📍 Server responded with:");
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("📡 Request was made but no response received:");
        console.error(error.request);
      } else {
        console.error("⚠️ Error setting up request:", error.message);
      }
    } finally {
      setLoading(false);
      console.log("🔄 Finished fetchOwnerProducts execution");
    }
  };
  
  
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
        <p className="text-center">Loading your products...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.length === 0 ? (
              <p className="text-center">No products uploaded yet.</p>
            ) : (
              products.map((product, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <ProductOwnerCard
                     image={product.image_url}
                    title={product.product_name}
                    description={product.description}
                    status={product.status || "Published"} // Default status if not present
                    // handleClick={() => navigate(`/product/${product.id}`)}
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
