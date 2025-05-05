import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import ProductCards from "../Components/ProductCards"
import SearchSection from "../Components/SearchSection";

function Products({products}){
    return (
        <div>
            <Header/>
            <SearchSection/>
    <div className="container1">
    {products.map((product, index) => (
      <ProductCards
      id={product.id}
        key={index}
        image={product.image} 
        title={product.title}
        description={product.description}
      />
    ))}
  </div>
  <div className="container2">
  {products.map((product, index) => (
      <ProductCards
        id={product.id}
        key={index}
        image={product.image} 
        title={product.title}
        description={product.description}
      />
    ))}
  </div>
  <Footer/>
  </div>
    )
}
export default Products;