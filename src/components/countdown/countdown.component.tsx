import React from "react";
import Flag from "../../assets/images/flag.svg";
import Map from "../../assets/images/map.svg";
import "./countdown.css";

const Countdown = () => {
    return(
        <div className="countdown">
            <div className="top">
                <img src={Flag} alt="" />
                <p>Countdown to Presidential and National Assembly Election 25th February, 2023</p>
                <p>62 days : 16 hrs : 58 mins : 10 secs</p>
            </div>
            <div className="bottom">
                <div className="left">
                    <p>Elections</p>
                    <p><strong>Get Information on the Nigeria 2023 Elections</strong></p>
                    <p>Explore the Data:</p>
                    <button className="election-day">Election Day Live Updates</button>
                    <button className="post-election">Post-Election Information</button>
                </div>
                <div className="right">
                    <select>
                        <option>Nigeria</option>
                    </select>
                    <img src={Map} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Countdown;