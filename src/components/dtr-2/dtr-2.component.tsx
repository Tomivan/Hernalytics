import React from "react";
import DTR from "../../assets/images/dtr.svg";
import "./dtr-2.css";

const DTRTwo = () => {
    return(
        <div className="dtr-two">
            <img src={DTR} alt="" />
            <div className="info">
                <p>As a DTR member</p>
                <p>Get access to more information and forums</p>
            </div>
        </div>
    )
}

export default DTRTwo;