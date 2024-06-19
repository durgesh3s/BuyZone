import React from "react"
import "./Hero.css";
import hero from "../Assets/hero_image.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
                </div>
                {/* <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
                </div> */}
            </div>
            <div className="hero-right">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )

}

export default Hero
