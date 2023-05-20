import React from "react";
import "./Plans.css"

import {plansData} from "../../data/plansData"

import whiteTick from "../../assets/whiteTick.png"
import rightArrow from "../../assets/rightArrow.png"

function Plans() {
    return(
        <div className="Plans" id="plans">

            <div className="blur plan-blur-1"></div>
            <div className="blur plan-blur-2"></div>

            <div className="plans-heading">
                <span className="stroke-text-green">Ready to start</span>
                <span>your journey</span>
                <span className="stroke-text-green">now within</span>
            </div>

            <div className="plans-container">
                {plansData.map((plan,i)=>{
                    return <div className="plans-card" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature,i)=>{
                                return <div className="feature" key={i}>
                                
                                    <img src={whiteTick} alt="whiteTick" />
                                    <span>{feature}</span>
                        
                                </div>
                            })}
                        </div>

                        <div><span>See more benefits</span><span> <img src={rightArrow} alt="rightArrow" /></span></div>
                        <button className="btn">Join now</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Plans;