import React from "react";
import GeneralUser from "../general-user/general-user.component";
import FemaleCandidate from "../female-candidate/female-candidate.component";
import DecideToRun from "../decide-to-run/decide-to-run.component";
import Reporter from "../reporter/reporter.component";
import "./communities.css";

const Communities = () => {
    return(
        <div className="communities">
            <p>Communities</p>
            <p>We are changing the narratives</p>
            <div className="components">
                <GeneralUser />
                <FemaleCandidate />
                <DecideToRun />
                <Reporter />
            </div>
        </div>
    )
}

export default Communities;