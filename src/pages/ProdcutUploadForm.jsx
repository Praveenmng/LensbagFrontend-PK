import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axiosInstance"; // Adjust the import path as necessary
import Header from "../Components/Header";
import { useUser } from "../context/UserContext";

function ProductUploadForm() {
  const { hasECompany, ecompanyId } = useUser();
  const navigate = useNavigate();
  const { id } = useParams(); // product ID from URL if editing

  const [product, setProduct] = useState({
    ecompany_id: ecompanyId,
    productName: "",
    description: "",
    price: "",
    type: "",
    city: "",
    state: "",
    zip: "",
    fromDate: "",
    toDate: ""
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hasECompany) {
      alert("You have to register Ecompany");
      navigate("/ecompany");
      return;
    }

    if (id) {
      // Editing existing product, fetch its data
      axios.get(`/api/products/${id}`, { withCredentials: true })
        .then(res => {
          const data = res.data;

          // Prefill the form with existing product data
          setProduct({
            ecompany_id: data.ecompany_id,
            productName: data.product_name,
            description: data.description,
            price: data.price,
            type: data.type,
            city: data.city,
            state: data.state,
            zip: data.zip,
            fromDate: data.from_date,
            toDate: data.to_date
          });

          if (data.image_url) {
            setPreview(`http://localhost:5000/uploads/${data.image_url}`);
          }

          setLoading(false);  
        })
        .catch(err => {
          console.error("Failed to fetch product for editing:", err);
          alert("Failed to load product for editing");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [hasECompany, id, navigate]);

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
    if (!hasECompany) {
      alert("You must register your company before uploading products.");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("image", file);
    }
    formData.append("ecompanyId", ecompanyId);
    formData.append("productName", product.productName);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("type", product.type);
    formData.append("city", product.city);
    formData.append("state", product.state);
    formData.append("zip", product.zip);
    formData.append("fromDate", product.fromDate);
    formData.append("toDate", product.toDate);

    if (id) {
      // Update existing product
      axios.patch(`/api/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then(response => {
        alert("Product updated successfully");
        navigate("/yourstore");
      })
      .catch(error => {
        console.error("Error updating product:", error);
        alert("Failed to update product");
      });
    } else {
      // Create new product
      axios.post("/api/user/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then(response => {
        alert("Product uploaded successfully");
        navigate("/yourstore");
      })
      .catch(error => {
        console.error("Error uploading product:", error);
        alert("Failed to upload product");
      });
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <p className="text-center mt-5">Loading...</p>
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-center">{id ? "Edit Your Product" : "Upload Your Product Details"}</h2>

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
            className="form-control mt-2 mb-2"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />

          <input
            name="productName"
            placeholder="Product Name"
            onChange={handleChange}
            value={product.productName}
            className="form-control mb-2"
            maxLength={27}
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            maxLength={250}
            value={product.description}
            className="form-control mb-2"
            style={{ height: "150px", resize: "vertical" }}
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

          <div className="row">
            <div className="col-6">
              <button
                onClick={() => navigate("/yourstore")}
                className="btn btn-outline-dark w-100"
              >
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button onClick={handleUpload} className="btn btn-dark w-100">
                {id ? "Update" : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductUploadForm;
