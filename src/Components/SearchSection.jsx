
import React, { useState } from "react";
function SearchSection() {

  const [searchText,setSearchText]=useState('')
  const [products, setProducts] = useState([]);
 
  function handleSearch(event){
    
    const searchInput=event.target.value;
    setSearchText(searchInput);
    
  }
  function handleSubmit(event){
   event.preventDefault(); 

    // Fetching products from the backend
    fetch(`/api/products?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
      
        setProducts(data); 
        setFilteredProducts(data); 
      })
      .catch((err) => console.error("Error fetching products:", err));
  }
  return (
   
      
<div className="container-fluid mt-2 px-3">
  
  <form className="d-flex" role="search" value={searchText} onSubmit={handleSubmit}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={handleSearch}
      value={searchText}
    />
    <button className="btn btn-dark"  type="submit">
      Search
    </button>
  </form>
</div>

    
  );
}

export default SearchSection;
