import React from "react"
import Header from "../Components/Header"
import WishlistContainer from "../Components/WishlistContainer";
import Footer from "../Components/Footer"
import SearchSection from "../Components/SearchSection"


function Wishlist({products}){


    return(

  <div>
    <Header/>
    <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Your Bag</span>
        </div>
        <SearchSection/>
        {products.map((product, index) => (
                    <WishlistContainer
                        id={product.id}
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                ))}
                  <Footer/>
  </div>

    )
}

export default Wishlist;