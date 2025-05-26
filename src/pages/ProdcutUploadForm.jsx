import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import { useUser } from "../context/UserContext";


function ProductUploadForm() {

  const {hasECompany}=useUser();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!hasECompany){
      alert("You have to register Ecompany");
      navigate("/ecompany");
    }
  })

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    type: "",
    city: "",
    state: "",
    zip: "",
    fromDate: "",
    toDate: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleImage(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const imageURL = URL.createObjectURL(selectedFile);
    setPreview(imageURL);
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("productName", product.productName);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("type", product.type);
    formData.append("city", product.city);
    formData.append("state", product.state);
    formData.append("zip", product.zip);
    formData.append("fromDate", product.fromDate);
    formData.append("toDate", product.toDate);

    axios
      .post("/api/user/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("Product uploaded successfully:", response.data);
        navigate("/yourstore");
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
          <div
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid #ccc",
              margin: "0 auto",
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span>No image uploaded</span>
            )}
          </div>
          <input
            className="form-control mt-2"
            type="file"
            name="image" // <-- Add this line!
            accept="image/*"
            onChange={handleImage}
          />

          {/* Input fields */}
          <input
            name="productName"
            placeholder="Product Name"
            onChange={handleChange}
            value={product.productName}
            className="form-control mb-2"
          />
          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={product.description}
            className="form-control mb-2"
          />
          <input
            name="type"
            placeholder="Type"
            onChange={handleChange}
            value={product.type}
            className="form-control mb-2"
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            value={product.city}
            className="form-control mb-2"
          />
          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={product.price}
            className="form-control mb-2"
          />
          <input
            name="state"
            placeholder="State"
            onChange={handleChange}
            value={product.state}
            className="form-control mb-2"
          />
          <input
            name="zip"
            placeholder="Zip"
            onChange={handleChange}
            value={product.zip}
            className="form-control mb-2"
          />
          <input
            type="date"
            name="fromDate"
            onChange={handleChange}
            value={product.fromDate}
            className="form-control mb-2"
          />
          <input
            type="date"
            name="toDate"
            onChange={handleChange}
            value={product.toDate}
            className="form-control mb-2"
          />

          {/* Buttons */}
          <div className="row">
            <div className="col-6">
              <button
                onClick={() => navigate("/yourstore")}
                className="btn btn-outline-dark w-100"
              >
                Hold
              </button>
            </div>
            <div className="col-6">
              <button onClick={handleUpload} className="btn btn-dark w-100">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
}

      export default ProductUploadForm;
