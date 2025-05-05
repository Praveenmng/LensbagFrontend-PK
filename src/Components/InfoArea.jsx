import React from "react";
import { Link } from "react-router-dom";

function InfoArea(){
    return(
        <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">Earn by lending your own device to others</h2>
    
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">How it works</h2>
            <p className="text-body-secondary">Opening your e-commerce store with Lensbag by creating account.Update your details and list your available camera and its equipements, Confirm the available dates and post it public  </p>
            <Link to ="/ecompany">
            <button  className="btn btn-dark">Start Your E-Company</button>
            </Link>
           
          </div>
    
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center t bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlink:href="#collection"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Lend to others</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
    
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center t bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlink:href="#gear-fill"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Chat to customer</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
    
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center t bg-gradient fs-4 rounded-3">
                  <svg className="bi" width="1em" height="1em">
                    <use xlink:href="#speedometer"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Set availability of days</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
    
              <div className="col d-flex flex-column gap-2">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center t bg-gradient fs-4 rounded-3">

                  <svg className="bi" width="1em" height="1em">
                    <use xlink:href="#table"></use>
                  </svg>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Set competetive price</h4>
                <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    )
}
export default InfoArea;