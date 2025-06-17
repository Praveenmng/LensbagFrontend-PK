import React from "react"
import Header from "../Components/Header";
import LandingImage from "../Components/landingImg";

// import SearchSection from "../Components/SearchSection";
import InfoArea from "../Components/InfoArea";
import ProductCards from "../Components/ProductCards";
import "../lensbagstyle.css"
import InfoSteps from "../Components/InfoSteps";
import Footer from "../Components/Footer"
import { useEffect, useState } from "react";
import axios from "../axiosInstance"; // Adjust the import path as necessary
import { useUser } from "../context/UserContext";
function Home() {
  const [products, setProducts] = useState([]);

  const { ecompanyId } = useUser();
  useEffect(() => {
    axios
      .get("/api/products", {
        params: { excludeEcompanyId: ecompanyId || null },
        withCredentials: true,
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [ecompanyId]);



  return (
    <div>
      <Header />
      <LandingImage />
      <InfoArea />
      {/* <SearchSection /> */}
      <h3 className="m-4">Recent Products</h3>
      <div className="container d-flex mt-3 mb-4 flex-wrap gap-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

          {products.map((product, index) => (
            <ProductCards
              id={product.id}
              key={index}
              image={product.image_url}
              title={product.product_name}
              description={product.description}
            />
          ))}
        </div>


      </div>



      <InfoSteps />
      <Footer />


    </div>
  )

}
export default Home;