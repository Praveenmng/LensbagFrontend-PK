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
        <div className="carousel-item active position-relative">
        <img src={landingImg1} className="d-block w-100 img-fluid" alt="Landing 1" style={{ objectFit: 'cover', height: '75vh' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
      </div>
      <div className="carousel-item position-relative">
        <img src={landingImg2} className="d-block w-100 img-fluid" alt="Landing 2" style={{ objectFit: 'cover', height: '75vh' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
      </div>
        </div>
      </div>

      {/* Overlay Text */}
      <div className="position-absolute top-50 start-50 translate-middle text-white px-3 w-100">
        <div className="container text-start">
          <h1 className="display-5 display-md-4 fw-bold fst-italic">
            Rent Cameras & Gear. <b>Affordable.</b> <b>Flexible.</b> <b>Professional.</b>
          </h1>
          <p className="lead my-3">
            Discover a wide range of professional cameras, lenses, and accessories — all available at budget-friendly rates. Perfect for filmmakers, photographers, and creators who need flexibility without compromising on quality.
          </p>
          <div className="mt-3">
            <Link to="/products">
              <button type="button" className="btn btn-outline-light btn-lg">
                Check the Products
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>

  );
}

export default LandingImage;
