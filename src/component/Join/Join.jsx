import React from "react";

import "./Join.css";

function Join() {
    return <div className="Join">
        <div className="left-j">

            {/* <hr /> */}

            <div>
                <span className="stroke-text-white">ready to </span> 
                <span>level up </span>
            </div>
            <div>
                <span>your body </span>
                <span className="stroke-text-green">with us ?</span>
            </div>

        </div>

        <div className="right-j">

            <form action="" className="email-container">
                <input type="email" name="user-email" placeholder="Enter your email" />
                <button className="btn" id="btn-j">Join now</button>
            </form>

        </div>
    </div>
}

export default Join;