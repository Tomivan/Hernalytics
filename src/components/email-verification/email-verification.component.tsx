import React from "react";
import MailBox from "../../assets/images/mailbox.svg";
import { Link } from "react-router-dom";
import "./email-verification.css";

const EmailVerificationComponent = () => {
    return(
        <div className="email-verification">
            <h1>Verify your email address</h1>
            <p>Click on the verification link has been sent to johndoe@gmail.com</p>
            <img src={MailBox} alt="" />
            <button className="create-account">GO TO MAIL</button>
            <p>Didn’t get it? <Link to="" className="login-link">Resend Link</Link></p>
        </div>
    )
}

export default EmailVerificationComponent;