import React from "react";

function WishlistContainer(props) {


    return (

        <div>
            <div className="container">
                <div className="row mt-4 ">
                    <div className="col-lg-3">
                        <img src={props.image} alt="productimage" />


                    </div>
                    <div className="col-lg-3 d-flex flex-column">
                        <h4>{props.title}</h4>
                        <h5 class="mt-2"> Rs.1000/day</h5>
                        <p id="statusunavailable">Unavailable</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-column">
                        <h4>Product description</h4>
                        <p>{props.description}</p>
                    </div>
                    <div className="col-lg-3  width-50 d-flex align-items-center gap-2">

                        <button type="button" className="btn btn-dark">Rent now</button>
                        <button type="button" className="btn btn-outline-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>&nbsp;
                            Add to list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WishlistContainer;