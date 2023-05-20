import React from "react";

import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png"
import "./Programs.css";

function Programs() {
    return <div className="Programs" id="programs">

        {/* Programs Header */}
        <div className="programs-header">
            <span className="stroke-text-green">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text-green">to shape you</span>
        </div>

        <div className="programs-categories">
            {programsData.map((program,i) => {
                return <div className="category" key={i}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <span><img src={rightArrow} alt="Arrow" />
                        </span>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Programs;