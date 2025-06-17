// SearchSection.jsx
import React, { useState } from "react";
import axios from "../axiosInstance"; // Adjust the import path as necessary

function SearchSection({ onSearchResults }) {
  const [searchText, setSearchText] = useState("");

  function handleSearchInputChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
    .get("/api/products", {
      params: { search: searchText },
      withCredentials: true, // If your backend uses session cookies
    })
    .then((res) => {
      onSearchResults(res.data); // Update parent with new search results
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
    });
  }

  return (
    <div className="container-fluid mt-2 px-3">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search products..."
          aria-label="Search"
          onChange={handleSearchInputChange}
          value={searchText}
        />
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchSection;
