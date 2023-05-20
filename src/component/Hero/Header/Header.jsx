import React, { useState } from "react";
import "./Header.css"

import Logo from "../../../assets/logo.png"
import Bars from "../../../assets/bars.png"

// For auto scroll
import { Link } from "react-scroll";

function Header() {

    const mobile = window.innerWidth <= 768 ? true : false;

    const [menuOpen, setMeuOpen] = useState(false);


    return (
        <div className="header">

            <img className="logo" src={Logo} alt="logo" />

            {(mobile === true && menuOpen === false) ? (

                <div

                    style={{
                        backgroundColor: 'var(--appColor)', padding: '0.5rem',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}

                    onClick={() => setMeuOpen(true)}
                >

                    <img src={Bars} alt="bars" style={{
                        width
                            : '1.5rem', height: '1.5rem'
                    }} />

                </div>

            ) : (<ul className="header-menu">
                <li>
                    <Link
                        onClick={() => setMeuOpen(false)}
                        to='hero'
                        // to='id'
                        spy={true}
                        smooth={true}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setMeuOpen(false)}
                        to='programs'
                        // to='id'
                        spy={true}
                        smooth={true}>
                        Programs
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setMeuOpen(false)}
                        to='reasons'
                        // to='id'
                        spy={true}
                        smooth={true}>
                        Why us
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setMeuOpen(false)}
                        to='plans'
                        // to='id'
                        spy={true}
                        smooth={true}>
                        Plans 
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setMeuOpen(false)}
                        to='testimonials'
                        // to='id'
                        spy={true}
                        smooth={true}>
                        Testimonial
                    </Link>
                </li>
            </ul>)}

            {/* <ul className="header-menu">
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonial</li>
            </ul> */}
        </div>
    )
}

export default Header;