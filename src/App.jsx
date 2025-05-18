import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Sony from "./assets/pdt1.png"
import Nikon from "./assets/pdt2.png"
import Lumix from "./assets/pdt3.png"
import CanaonCINIE from "./assets/pdt4.png"
import Ecompany from "./pages/E-Company"
import ProductUploadForm from "./pages/ProdcutUploadForm";
import Wishlist from "./pages/Wishlist";
import ProfileSettings from "./pages/ProfileSettings"
import YourStore from "./pages/YourStore";
import RentalRequest from "./pages/RentalRequest";
import YourBag from "./pages/YourBag";



const products = [
  {
    id: 11,
    image: Sony,
    title: "Sony DSLR M3",
    price: "Rs.1000/day",
    description: "Capture stunning moments with professional clarity.",
  },
  {
    id: 12,
    image: Nikon,
    title: "Nikon Full Frame",
    price: "Rs.1000/day",
    description: "Capture stunning moments with professional clarity.",
  },
  {
    id: 13,
    image: Lumix,
    title: "Lumix DSLR M2",
    price: "Rs.1000/day",
    description: "Capture stunning moments with professional clarity.",
  },
  {
    id: 14,
    image: CanaonCINIE,
    title: "Canon CINIE",
    price: "Rs.1000/day",
    description: "Capture stunning moments with professional clarity.",
  },

];


function App() {
  return (


      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<Signup />} />


        <Route path="/" element={<Home products={products} />} />
        <Route path="/home" element={<Home products={products} />} />
        <Route path="/products" element={<Products products={products} />} />

        <Route path="/productdetails/:id" element={<ProductDetails products={products} />} />
        <Route path="/ecompany" element={<Ecompany />} />
        <Route path="/productuploadform" element={<ProductUploadForm />} />
        <Route path="/wishlist" element={<Wishlist products={products} />} />
        <Route path="/profilesettings" element={<ProfileSettings />} />
        <Route path="/yourstore" element={<YourStore />} />
        <Route path="/rentalrequest/:id" element={<RentalRequest products={products} />} />
        <Route path ="/yourbag" element ={<YourBag/>}/>
      </Routes>
  

  );
}
export default App;
