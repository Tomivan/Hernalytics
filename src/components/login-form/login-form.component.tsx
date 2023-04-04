import React from "react";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";
import { Link } from "react-router-dom";
import "./login-form.css";

const LoginForm = () => {
    return(
        <div className="login-form">
            <h1>Welcome back!</h1>
            <p>Login to access your account</p>
            <div className="socials">
                <img src={Google} alt=""  className="social"/>
                <img src={Facebook} alt=""  className="social"/>
                <img src={Apple} alt=""  className="social"/>
            </div>
            <form className="form">
                <label>Email Address *</label>
                <input type="text" placeholder="Email address" />
                <label>Password *</label>
                <input type="text" placeholder="Enter Password" />
                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
                <button className="create-account">LOG IN</button>
                <p>Don’t have an account?<Link to="/sign-up" className="login-link">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default LoginForm;