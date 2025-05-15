import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

function ProductUploadForm() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price:"",
    type: "",
    city: "",
    state: "",
    zip: "",
    fromDate: "",
    toDate: "",
    preview_imgURL: ""
  });

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleImage(event) {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file); 
    setProduct({ ...product, preview: imageURL });
  }

  function handleUpload() {
    axios
      .post("/api/user/products", product, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("Product uploaded successfully:", response.data);
        navigate("/yourstore"); // Ensure navigate is properly imported
      })
      .catch(function (error) {
        console.error("Error uploading product:", error);
        alert("Failed to upload product");
      });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-center">Upload Your Product Details</h2>

        {/* Image Preview */}
        <div className="mb-3 text-center">
          <div style={{ width: "200px", height: "200px", border: "1px solid #ccc", margin: "0 auto" }}>
            {product.preview ? (
              <img src={product.preview_imgURL} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span>No image uploaded</span>
            )}
          </div>
          <input className="form-control mt-2" type="file" onChange={handleImage} />
        </div>

        {/* Input fields */}
        <input name="productName" placeholder="Product Name" onChange={handleChange} value={product.productName} className="form-control mb-2" />
        <input name="description" placeholder="Description" onChange={handleChange} value={product.description} className="form-control mb-2" />
        <input name="type" placeholder="Type" onChange={handleChange} value={product.type} className="form-control mb-2" />
        <input name="city" placeholder="City" onChange={handleChange} value={product.city} className="form-control mb-2" />
        <input name="price" placeholder="Price" onChange={handleChange} value={product.price} className="form-control mb-2" />
        <input name="state" placeholder="State" onChange={handleChange} value={product.state} className="form-control mb-2" />
        <input name="zip" placeholder="Zip" onChange={handleChange} value={product.zip} className="form-control mb-2" />
        <input type="date" name="fromDate" onChange={handleChange} value={product.fromDate} className="form-control mb-2" />
        <input type="date" name="toDate" onChange={handleChange} value={product.toDate} className="form-control mb-2" />

        {/* Buttons */}
        <div className="row">
          <div className="col-6">
            <button onClick={() => navigate("/yourstore")} className="btn btn-outline-dark w-100">Hold</button>
          </div>
          <div className="col-6">
            <button onClick={handleUpload} className="btn btn-dark w-100">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUploadForm;
