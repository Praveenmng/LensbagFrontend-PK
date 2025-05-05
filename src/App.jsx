import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
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

const products = [
  {
    id:11,
    image: Sony,
    title: "Sony DSLR M3",
    description: "Capture stunning moments with professional clarity.",
  },
  {
    id:12,
    image: Nikon,
    title: "Nikon Full Frame",
    description: "Capture stunning moments with professional clarity.",
  },
  {
    id:13,
    image: Lumix,
    title: "Lumix DSLR M2",
    description: "Capture stunning moments with professional clarity.",
  },
  {
    id:14,
    image: CanaonCINIE,
    title: "Canon CINIE",
    description: "Capture stunning moments with professional clarity.",
  },

];


function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/home" element={<Home products={products}/>}/>
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signUp" element={<Signup/>}/>

          <Route path="/productdetails/:id" element={<ProductDetails products={products} />} />
          <Route path ="/ecompany" element={<Ecompany/>}/> 
           <Route path="/productuploadform" element={<ProductUploadForm/>}/>
          <Route path="/wishlist" element={<Wishlist products={products}/>}/>
          <Route path="/profilesettings" element ={<ProfileSettings/>}/>
          <Route path="/yourstore" element={<YourStore/>}/>
        </Routes>
      </Router>
    );
  }
export default App;
