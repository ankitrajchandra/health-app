import React from "react";

import "./Footer.css"

import Github from "../../assets/github.png"
import Insta from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

import {Link} from "react-router-dom"

function Footer() {
    return <div className="Footer-container">

        <hr />

        <div className="footer">

            <div className="social-links">
                <img src={Github} alt="footer-1" />
                <img src={Insta} alt="footer-2" />
                <img src={LinkedIn} alt="footer-3" />
            </div>

            <div className="logo-f">
                <img src={Logo} alt="logo-f" />
            </div>

        </div>

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>

    </div>
}

export default Footer;