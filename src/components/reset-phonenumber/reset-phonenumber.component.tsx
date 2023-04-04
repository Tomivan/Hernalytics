import React from "react";
import { Link } from "react-router-dom";
import "./reset-phonenumber.css";

const ResetPasswordPhonenumber = () => {
    return(
        <div className="reset-password">
            <h1>Reset Password</h1>
            <p>Enter the phone number associated with your account to reset your password</p>
            <form className="reset-password-form">
                <label>Phone Number *</label>
                <input type="phone" placeholder="Email Address" />
                <button className="create-account">RESET PASSWORD</button>
                <Link to="/reset-password-email" className="method">Use Another Method</Link>
            </form>
        </div>
    )
}

export default ResetPasswordPhonenumber;