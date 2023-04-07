import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailVerification from "./email-verification";
import Login from "./login";
import Onboarding from "./onboarding";
import Signup from "./signup";
import ResetEmail from "./reset-email";
import ResetPhonenumber from "./reset-phonenumber";
import OnboardingPage2 from "./onboarding-2";
import SignupPageTwo from "./signup-2";

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route  path="/login" element={<Login />}/>
                <Route path="/" element={<Onboarding />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/email-verification" element={<EmailVerification />}/>
                <Route path="/reset-password-email" element={<ResetEmail />}/>
                <Route path="/reset-password-phonenumber" element={<ResetPhonenumber />}/>
                <Route path="/onboarding-page-two" element={<OnboardingPage2 />} />
                <Route path="/signup-two" element={<SignupPageTwo />} />
            </Routes>
        </Router>
    )
}

export default Pages;