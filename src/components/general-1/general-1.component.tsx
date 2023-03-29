import React from "react";
import GeneralUser from "../../assets/images/general.svg";
import "./general-1.css";

const GeneralOne = () => {
    return(
        <div className="general-one">
            <img src={GeneralUser} alt="" />
            <div className="info">
                <p>As a general user</p>
                <p>Get access to more information and forums</p>
            </div>
        </div>
    )
}

export default GeneralOne;