import React from "react";
import "./observation.css";

const Observation = () => {
    return(
        <div className="observation">
            <div className="left">
                <p>The 'Citizen Observation Checklist'</p>
                <p>Who says only accredited observers can observe elections? Through the 
                    Citizen Observation Checklist, you get to share your Polling Unit experience 
                    as an Observer!</p>
            </div>
            <div className="right">
                <form className="form">
                    <label>Where is your polling unit?</label>
                    <input type="text" placeholder="Enter response" />
                    <label>How many female officials were present?</label>
                    <input type="text" placeholder="Enter response" />
                    <label>Was there any sign of violence? *</label>
                    <input type="text" placeholder="Enter response" />
                    <label>Were you able to cast your vote *</label>
                    <input type="text" placeholder="Enter response" />
                    <button type="submit">SUBMIT AN OBSERVATION</button>
                </form>
            </div>
        </div>
    )
}

export default Observation