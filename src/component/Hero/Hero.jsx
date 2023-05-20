import React from "react";
import "./Hero.css"

import Header from "./Header/Header"

// Images import 

import hero_image from "../../assets/yoga-hero2.png"
// import hero_image_back from "../../assets/grean-back.png"
import Heart from "../../assets/green-heart.png"
import Calories from "../../assets/calories.png"

// for dynamicaly counting
import NumberCounter from "number-counter";

// for Animation

import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="hero" id="hero">

            <div className="blur hero-blur"></div>

            <div className="left-h">
                <Header />

                {/* The best ad */}

                <div className="the-best-ad">

                    {/* Animation */}
                    <motion.div
                    
                    initial={{left:"238px"}}
                    whileInView={{left:"8px"}}
                    transition={{type:"tween", duration:5}}
                    
                    ></motion.div>

                    <span>The best fitness club in the town</span>
                </div>

                {/* Hero heading */}

                <div className="hero-heading">
                    <div>
                        <span className="stroke-text-white">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>complete body</span>
                    </div>

                    <div>
                        <span>In here we will help you to shape your soul and mind, build your ideal body and train you for self defence</span>
                    </div>
                </div>

                {/* Figures */}

                <div className="figures">
                    <div>
                        {/* <span>+ 140</span> */}
                        <span><NumberCounter end={140} start={100} delay="3" preFix="+" /></span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                    <span><NumberCounter end={981} start={900} delay="3" preFix="+" /></span>
                        <span>member joined</span>
                    </div>
                    <div>
                    <span><NumberCounter end={50} start={10} delay="3" preFix="+" /></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Hero Buttons */}

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>


                {/* Calories  */}

                {/* <motion.div 
                
                // Animation
                initial={{left:"33rem"}}
                whileInView={{left:"41rem"}}
                transition={{type:"tween", duration: 2}}
                 
                className="calories">
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div> */}


            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                {/* Animation */}
                
                <motion.div className="heart-rate"
                
                initial={{right:"-1rem"}}
                whileInView={{right: "4rem"}}
                transition={{type:"tween", duration:2}}
                >

                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>117 bpm</span>
                </motion.div>

                {/* hero images */}

                <img className="hero-image" src={hero_image} alt="" />

                <div className="blur hero-blur2"></div>

                

                {/* Animation */}

                {/* <motion.img className="hero-image-back" 
                
                initial={{right:"17rem"}}
                whileInView={{right: "25rem"}}
                transition={{type:"tween", duration:2}}

                src={hero_image_back} alt="" /> */}

            </div>
        </div>
    )
}

export default Hero;