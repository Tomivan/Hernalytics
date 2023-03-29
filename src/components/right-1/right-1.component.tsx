import React from "react";
import CandidateOne from "../candidate-1/candidate-1.component";
import DTROne from "../dtr-1/dtr-1.component";
import GeneralUser from "../general-1/general-1.component";
import { Link } from "react-router-dom"
import "./right-1.css";

const RightOne = () => {
    return(
        <div className="right-one">
            <h1>How are you planning to use Hernalytics?</h1>
            <p>We will streamline your experience accordingly.</p>
            <GeneralUser />
            <DTROne />
            <CandidateOne />
            <button className="create-account">Create my account</button>
            <p>Already have an account<Link to="/login" className="login-link">Log in</Link></p>
        </div>
    )
}

export default RightOne;