import React from "react";
import HernalyticsImage from "../../assets/images/hernalytics.svg";
import "./footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="left">
                <img src={HernalyticsImage} alt="" />
                <p>#&157; 2022 Hernalytics</p>
            </div>
            <div className="right">
                <div className="note">
                    <p><strong>About</strong></p>
                    <p>Our Story</p>
                    <p>Blog</p>
                    <p>About Hernalytics</p>
                    <p>Videos</p>
                </div>
                <div className="note">
                    <p><strong>Support</strong></p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div className="note">
                    <p><strong>Let's Chat</strong></p>
                    <p>hernalytics@gmail.com</p>
                    <p>Blog</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;