import React from "react";
import LeftOne from "../left-1/left-1.component";
import RightOne from "../right-1/right-1.component";
import "./onboarding-1.css";

const OnboardingOne = () => {
    return(
        <div className="onboarding-one">
            <LeftOne />
            <RightOne />
        </div>
    )
}

export default OnboardingOne;