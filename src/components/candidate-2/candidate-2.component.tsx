import React from "react";
import Candidate from "../../assets/images/candidate.svg";
import "./candidate-2.css";

const CandidateTwo = () => {
    return(
        <div className="candidate-two">
            <img src={Candidate} alt="" />
            <div className="info">
                <p>As a Candidate</p>
                <p>Get access to more information and forums</p>
            </div>
        </div>
    )
}

export default CandidateTwo;