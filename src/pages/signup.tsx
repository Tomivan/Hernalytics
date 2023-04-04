import React from "react";
import SignupForm from "../components/signup-form/signup-form.component";
import SignupOne from "../components/signup/signup.component";


const Signup = () => {
    return(
        <div className="pages">
            <SignupOne />
            <SignupForm />
        </div>
    )
}

export default Signup;