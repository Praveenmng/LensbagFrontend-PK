import React from "react"
import Header from "../Components/Header";
import LandingImage from "../Components/landingImg";
import SearchSection from "../Components/SearchSection";
import InfoArea from "../Components/InfoArea";
import ProductCards from "../Components/ProductCards";
import "../lensbagstyle.css"
import InfoSteps from "../Components/InfoSteps";
import Footer from "../Components/Footer"
import { useEffect,useState} from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
function Home() {
  const [products, setProducts] = useState([]);

  const {  ecompanyId } = useUser();

  useEffect(() => {
    axios.get("/api/products", {
      params: {
        excludeEcompanyId: ecompanyId || null
      },
      withCredentials: true
    })
    .then((res) => setProducts(res.data))
    .catch((err) => console.error("Error fetching products:", err));
  }, [ecompanyId]);
  
    return (
        <div>
            <Header />
            <LandingImage />
            <InfoArea />
            <SearchSection />
            <div className="container1">
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


    <div className="container2">
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
    <InfoSteps/>
    <Footer/>


        </div>
    )

}
export default Home;