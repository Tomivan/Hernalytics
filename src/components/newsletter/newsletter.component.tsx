import React from "react";
import "./newsletter.css";

const Newsletter = () => {
    return(
        <div className="newsletter">
            <h2>Subscribe to our newsletter</h2>
            <p>Join a community of socially conscious people, get the latest updates.</p>
            <p>Email Address</p>
            <input type="email" placeholder="Email Address" />
            <button className="subscribe">SUBSCRIBE NOW</button>
        </div>
    )
}

export default Newsletter;