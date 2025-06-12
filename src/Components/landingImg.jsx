import React from "react";
import { Link } from 'react-router-dom';
import landingImg1 from '../assets/landing_page_img1.png';
import landingImg2 from '../assets/landing_page_img2.png';

function LandingImage() {
  return (
    <div className="landingimage position-relative mt-4">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={landingImg1} className="d-block w-100" alt="Landing 1" />
          </div>
          <div className="carousel-item">
            <img src={landingImg2} className="d-block w-100" alt="Landing 2" />
          </div>
        </div>  
      </div>

      {/* Overlay Text */}
      <div className="position-absolute top-50 start-0 translate-middle-y text-white px-4 w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 px-0">
          <h1 className="display-4 fst-italic">
            Rent Cameras & Gear. <b>Affordable.</b> <b>Flexible. Professional</b>
          </h1>
          <p className="lead my-3">Rent Our Gear....Alongside explore Rentals</p>
          <div className="mt-3">
            <Link to="/products">
            <button type="button" class="btn btn-outline-light">Check the Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LandingImage;
