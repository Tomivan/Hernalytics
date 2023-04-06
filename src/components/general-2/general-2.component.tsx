import React from "react";
import GeneralUser from "../../assets/images/general.svg";
import "./general-2.css";

const GeneralTwo = () => {
    return(
        <div className="general-two">
            <img src={GeneralUser} alt="" />
            <div className="info">
                <p>As a general user</p>
                <p>Get access to more information and forums</p>
            </div>
        </div>
    )
}

export default GeneralTwo;