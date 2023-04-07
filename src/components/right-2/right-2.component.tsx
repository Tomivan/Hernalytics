import React from "react";
import GeneralTwo from "../general-2/general-2.component";
import DTRTwo from "../dtr-2/dtr-2.component";
import CandidateTwo from "../candidate-2/candidate-2.component";
import { Link } from "react-router-dom"
import "./right-2.css";


const RightTwo = () => {
    return(
        <div className="right-two">
            <h1>How are you planning to use Hernalytics?</h1>
            <p>We will streamline your experience accordingly.</p>
            <div className="flex">
            <GeneralTwo />
            <DTRTwo />
            <CandidateTwo />
            </div>
            <button className="create-account">Create my account</button>
            <p className="center">Already have an account<Link to="/login" className="login-link">Log in</Link></p>
        </div>
    )
}

export default RightTwo;