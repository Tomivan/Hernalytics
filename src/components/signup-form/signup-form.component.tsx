import React from "react";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";
import "./signup-form.css";

const SignupForm = () => {
    return(
        <div className="signup-form">
            <h1>Let's finish up</h1>
            <p>Enter your details to finish creating your account</p>
            <div className="socials">
                <img src={Google} alt=""  className="social"/>
                <img src={Facebook} alt=""  className="social"/>
                <img src={Apple} alt=""  className="social"/>
            </div>
            <form className="form">
                <label>Country *</label>
                <input type="text" placeholder="Select Country" />
                <label>Name *</label>
                <input type="text" placeholder="Full Name" />
                <label>Email Address</label>
                <input type="email" placeholder="Email Address" />
                <label>Password</label>
                <input typeof="password" placeholder="Create Password" />
                <p>By signing up, I agree to Hernalytics Terms of Service and Privacy Policy</p>
                <button className="create-account">Create my account</button>
            </form>
        </div>
    )
}

export default SignupForm;