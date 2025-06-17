import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddButton from "../assets/Addbt.png";
import { useNavigate } from 'react-router-dom';
import ProductOwnerCard from "../Components/productOwnerCard";
import { useUser } from "../context/UserContext";
import axios from "../axiosInstance"; // Adjust the import path as necessary

function YourStore() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { login, hasECompany, userId } = useUser();

  useEffect(() => {
    if (!login || !userId) {
      alert("You need to login first.");
      navigate("/home");
      return;
    }

    if (!hasECompany) {
      alert("You need to register your Ecompany.");
      navigate("/ecompany");
      return;
    }

    fetchOwnerProducts();
  }, [login, hasECompany, userId]);

  const fetchOwnerProducts = async () => {
    try {
      const res = await axios.get("/api/owner/products", {
        withCredentials: true,
      });
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching owner's products:", error);
    } finally {
      setLoading(false);
    }
  };

 async function handleDelete(productId) {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  try {
    await axios.patch(`/api/delete/products/${productId}`, {
      withCredentials: true,
    });

    // Update state
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Failed to delete product.");
  }
}

  const handleStatusChange = async (productId, newStatus) => {
    try {
      await axios.put(
        `/api/products/${productId}/status`,
        { status: newStatus },
        { withCredentials: true }
      );
  
      // Update local state
      setProducts(prev =>
        prev.map(p =>
          p.id === productId
            ? {
                ...p,
                is_available: newStatus === "Published",
                status: newStatus, // Also update the status in local state!
              }
            : p
        )
      );
    } catch (error) {
      console.error("Error updating product status:", error);
    }
  };
  

  return (
    <div>
      <Header />
      <div className="container text-center mt-4 mb-4">
      <img
          src={AddButton}
          alt="Add Button"
          style={{ cursor: 'pointer', width: '150px' }}
          onClick={() => navigate("/productuploadform")}
        />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
     
      </div>

      {loading ? (
        <p className="text-center">Loading your products...</p>
      ) : (
        <div className="container">
          <div className="row">
            {products.length === 0 ? (
             
                 <p style={{marginTop:"22px"}}>No products uploaded yet.</p>
                 
            ) : (
                
             
              products.map((product, index) => (
                <div className="col-md-3 mb-4" key={index}>
                  <ProductOwnerCard
                    product={product}
                    onStatusChange={handleStatusChange}
                    onEditClick={() => navigate(`/productuploadform/${product.id}`)}
                    onDeleteClick={()=>handleDelete(product.id)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}

      </div>
       
    </div>
  );
}

export default YourStore;
