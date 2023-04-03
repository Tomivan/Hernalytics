import React from "react";
import Hernalytics from "../components/hernalytics/hernalytics.component";
import ResetPasswordEmail from "../components/reset-password/reset-password.component";


const ResetEmail = () => {
    return(
        <div className="pages">
            <Hernalytics />
            <ResetPasswordEmail />
        </div>
    )
}

export default ResetEmail;