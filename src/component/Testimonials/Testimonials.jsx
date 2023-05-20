import React, { useState } from "react";

import {testimonialsData} from "../../data/testimonialsData";

import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

import "./Testimonials.css"

import {motion} from "framer-motion";

function Testimonials() {

    const [selected, setSelected]=useState(0);
    const tLength=testimonialsData.length;

    return <div className="Testimonials" id="testimonials">

        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text-white">what they</span>
            <span>say about us</span>

            <motion.span
            
            key={selected}
           
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:100}}
            transition={{type:"spring", duration:2}}
            
             className="review">
            {testimonialsData[selected].review}</motion.span>

            <span>
                <span style={{color: 'var(--green)'}}>
                {testimonialsData[selected].name }
                </span>

                 {" "}-{" "}

                 <span>
                 {testimonialsData[selected].status}
                 </span>
            </span>
        </div>

        <div className="right-t">
        
            <motion.div
            
            initial={{opacity:0, x:-100}}
            transition={{type:"spring", duration:2}}
            whileInView={{opacity:1, x:0}}
            
            ></motion.div>

            <motion.div
            
            initial={{opacity:0, x:100}}
            transition={{type:"spring", duration:2}}            whileInView={{opacity:1,x:0}}
            
            ></motion.div>

            <motion.img 
            
            key={selected}
            // Every time key is unique and here it detect whether it will be animated or not after clicking

            initial={{opacity:0, x:100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{type:"spring", duration:2}}
            
            src={testimonialsData[selected].image} alt="t-im" />

            <div className="arrows">

                <img 
                onClick={()=>{
                    selected===0? setSelected(tLength-1) : setSelected(selected-1);
                }}
                src={leftArrow} alt="arrowleft-i" />

                <img 
                onClick={()=>{
                    selected===(tLength-1)? setSelected(0) : setSelected(selected+1);
                }}
                src={rightArrow} alt="arrowright-i" />

            </div>
        </div>


    </div>
}

export default Testimonials;