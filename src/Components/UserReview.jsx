import React from "react";
import styles from "../productdetails.module.css";

function UserReview() {


    return (
        <div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-xl-4">
                        <h3 style={{color: "black"}}>User Reviews</h3>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-xl-4 ">
                        <h4 style={{textAlign:"center"}}>User Name</h4>
                        <div className={styles.circle + " mx-auto d-block"}></div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, accusantium.</p>

                    </div>
                    <div className="col-xl-4 ">
                        <h4 style={{textAlign:"center"}}>User Name</h4>
                        <div className={styles.circle + " mx-auto d-block"}></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, accusantium.</p>

                    </div>
                    <div className="col-xl-4 ">
                        <h4 style={{textAlign:"center"}}>User Name</h4>
                        <div className={styles.circle + " mx-auto d-block"}></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, accusantium.</p>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserReview;