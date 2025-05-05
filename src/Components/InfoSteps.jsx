import React from "react"

import bgImage from '../assets/img3.png'; 


function InfoSteps() {
    return (
      <div
        className="p-5 mb-4 bg-body-tertiary rounded-3"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat:" no-repeat",
          backgroundSize: "cover",
          minHeight: "60vh" ,
        //   height:"100vh",
          opacity: 10

        }}
      >
        <div className="container-fluid py-5" id="txtclr">
          <h1 className="display-5 fw-bold" id="txtclr">Product Safety First</h1>
          <p className="col-md-8 fs-4" id="txtclr">
            Using a series of utilities, you can create this jumbotron, just like
            the one in previous versions of Bootstrap. Check out the examples
            below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-light" type="button">
           Check our Terms and Policy
          </button>
        </div>
      </div>
    );
  }
export default InfoSteps;
