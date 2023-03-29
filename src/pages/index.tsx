import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route  path="/login" element={<Login />}/>
                <Route path="/" element={<Signup />}/>
            </Routes>
        </Router>
    )
}

export default Pages;