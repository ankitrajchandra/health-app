import React from "react";
import "./Reasons.css";

import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image4 from "../../assets/image4.jpg"

import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"

import tick from "../../assets/green-check.png"

function Reasons() {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3" />
                <img src={image4} alt="image4" />
            </div>

            <div className="right-r">
                <span>Some reasons</span>
                <div>
                    <span className="stroke-text-white">why</span>
                    <span>choose us ?</span>
                </div>

                <div className="why-us">
                    <div>
                        <img src={tick}
                            alt="tick" />
                        <span>
                            over 140+ expert coaches
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>
                            train smarter and faster than before
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>
                            Healthy environment
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>
                            1 free program for new member
                        </span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>
                            reliable partners
                        </span>
                    </div>
                </div>

                <span className="partners">
                    Our partners
                </span>

                <div className="partners-images">
                    <img src={nb} alt="nb" />
                    <img src={adidas} alt="adidas" />
                    <img src={nike} alt="nike" />
                </div>
            </div>
        </div>
    )
}

export default Reasons;