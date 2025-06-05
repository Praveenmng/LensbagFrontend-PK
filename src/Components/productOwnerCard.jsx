import React from "react";

const statusOptions = ["Published", "Hold"];

function ProductOwnerCard({ product, onStatusChange, onEditClick, onDeleteClick}) {
  const handleChange = (e) => {
    onStatusChange(product.id, e.target.value);
  };

  return (
    <div className="card h-100">
      <img
        src={
          product.image_url
            ? `http://localhost:5000/uploads/${product.image_url}`
            : "/default-product.png"
        }
        className="card-img-top"
        alt={product.product_name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.product_name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>

        <label htmlFor={`status-select-${product.id}`} className="form-label">
          <strong>Status:</strong>
        </label>
        <select
          id={`status-select-${product.id}`}
          className="form-select mb-2"
          value={product.status || "Published"}
          onChange={handleChange}
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button
          className="btn btn-outline-primary w-100 mt-auto"
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger  w-100 mt-2"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductOwnerCard;
