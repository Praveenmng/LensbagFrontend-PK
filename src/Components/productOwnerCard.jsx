import React from "react";

function ProductOwnerCard({ image, title, description, status, handleClick }) {
  // Determine button class based on status
  const getStatusButtonClass = (status) => {
    switch (status.toLowerCase()) {
      case "published":
        return "btn btn-success";
      case "holding":
        return "btn btn-warning";
      case "out for customer":
        return "btn btn-info";
      default:
        return "btn btn-secondary";
    }
  };

  return (
    <div className="card" onClick={handleClick} style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={`http://localhost:5000/uploads/${image}`}
        width="288"
        height="168.78"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        {/* Status Button */}
        <button
          className={getStatusButtonClass(status)}
          style={{ borderColor: "black", cursor: "default" }}
          disabled
        >
          {status}
        </button>
      </div>
    </div>
  );
}

export default ProductOwnerCard;
