import React from "react";
import { Link } from "react-router-dom";
import "./reset-password.css";

const ResetPasswordEmail = () => {
    return(
        <div className="reset-password">
            <h1>Reset Password</h1>
            <p>Enter the email address associated with your account to reset your password</p>
            <form className="reset-password-form">
                <label>Email Address</label>
                <input type="email" placeholder="Email Address" />
                <button className="create-account">RESET PASSWORD</button>
                <Link to="/reset-password-phonenumber" className="method">Use Another Method</Link>
            </form>
        </div>
    )
}

export default ResetPasswordEmail;