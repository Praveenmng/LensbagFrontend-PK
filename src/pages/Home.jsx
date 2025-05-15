import React from "react"
import Header from "../Components/Header";
import LandingImage from "../Components/landingImg";
import SearchSection from "../Components/SearchSection";
import InfoArea from "../Components/InfoArea";
import ProductCards from "../Components/ProductCards";
import "../lensbagstyle.css"
import InfoSteps from "../Components/InfoSteps";
import Footer from "../Components/Footer"



function Home({products}) {
  
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
    <InfoSteps/>
    <Footer/>


        </div>
    )

}
export default Home;