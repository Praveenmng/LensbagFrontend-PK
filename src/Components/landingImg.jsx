import React from "react";
import { Link } from 'react-router-dom';
import landingImg1 from '../assets/landing_page_img1.png';
import landingImg2 from '../assets/landing_page_img2.png';

function LandingImage() {
  return (
    <div className="landingimage position-relative mt-4">
    {/* Carousel */}
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={landingImg1} className="d-block w-100 img-fluid" alt="Landing 1" style={{ objectFit: 'cover', height: '100vh' }} />
        </div>
        <div className="carousel-item">
          <img src={landingImg2} className="d-block w-100 img-fluid" alt="Landing 2" style={{ objectFit: 'cover', height: '100vh' }} />
        </div>
      </div>
    </div>
  
    {/* Overlay Text */}
    <div className="position-absolute top-50 start-50 translate-middle text-white px-3 text-center w-100">
      <div className="container">
        <h1 className="display-5 display-md-4 fw-bold fst-italic">
          Rent Cameras & Gear. <b>Affordable.</b> <b>Flexible. Professional</b>
        </h1>
        <p className="lead my-3">Rent Our Gear... Alongside explore Rentals</p>
        <div className="mt-3">
          <Link to="/products">
            <button type="button" className="btn btn-outline-light btn-lg">Check the Products</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default LandingImage;
