import React from "react";
import DTR from "../../assets/images/dtr.svg";
import "./dtr-1.css";

const DTROne = () => {
    return(
        <div className="dtr-one">
            <img src={DTR} alt="" />
            <div className="info">
                <p>As a DTR member</p>
                <p>Get access to more information and forums</p>
            </div>
        </div>
    )
}

export default DTROne;