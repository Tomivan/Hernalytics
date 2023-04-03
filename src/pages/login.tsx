import React from "react";
import Hernalytics from "../components/hernalytics/hernalytics.component";
import LoginForm from "../components/login-form/login-form.component";

const Login = () => {
    return(
        <div className="pages">
            <Hernalytics />
            <LoginForm />
        </div>
    )
}

export default Login;