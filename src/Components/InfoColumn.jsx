import React from "react"


function InfoColumn() {

    return (
        <div className="container">
            <div className="row d-flex flex-row mt-5">
                <div className="col-xl-3">
                    <h5>Instant Delivery</h5>
                    <p>Chat to owner for instant delivery</p>
                </div>
                <div className="col-xl-3">
                    <h5>Product Avail   ability</h5>
                    <p>Date avaible from today-Maximum lending date(start)(end)</p>
                </div>
                <div className="col-xl-3">
                    <h5>Chat</h5>
                    <p>Stay connect with owner to update the product safety</p>
                </div>
                <div className="col-xl-3">
                    <h5>Product Safety Policy</h5>
                    <p>Date avaible from today-Maximum lending date(start)(end)</p>
                </div>
            </div>
        </div>

    )
}

export default InfoColumn;