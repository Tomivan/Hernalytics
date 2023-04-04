import React from "react";
import HernalyticsImage from "../../assets/images/hernalytics.svg";
import Verification from "../../assets/images/verification.svg";
import "./hernalytics.css";

const Hernalytics = () => {
    return(
        <div className="hernalytics">
            <img src={Verification} alt="" className="verification"/>
            <img src={HernalyticsImage} alt="" className="hernalytics-image"/>
        </div>
    )
}

export default Hernalytics;