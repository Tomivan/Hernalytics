import React from "react";
import Hernalytics from "../components/hernalytics/hernalytics.component";
import EmailVerificationComponent from "../components/email-verification/email-verification.component";

const EmailVerification = () => {
    return(
        <div className="pages">
            <Hernalytics />
            <EmailVerificationComponent />
        </div>
    )
}

export default EmailVerification;