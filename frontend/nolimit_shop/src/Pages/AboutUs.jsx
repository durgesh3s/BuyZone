import React from "react"
import "./CSS/AboutUs.css"
import team from "./Assets/team.png";
import vision from "./Assets/vision.png";
import mission from "./Assets/mission.png";
import objective from "./Assets/objective.png";
import award1 from "./Assets/Awards-1.png";
import award2 from "./Assets/Awards-2.png";
import award3 from "./Assets/Awards-3.png";
import award4 from "./Assets/Awards-4.png";
import award5 from "./Assets/Awards-5.png";


const AboutUs = () => {
    return (
        <div className="aboutus">
            <h1>ABOUT US</h1>
            <hr />
            <img src={team} alt="hero" />
            <p>
                14 retail outlets located island-wide. With roots dating back to our establishment in 1994 in the hill town of Bandarawela, we have strengthened our presence across the local fashion retail landscape, rapidly expanding to provide lifestyle experiences with a fast-progressing, high demand retail market. The growing reputation as both a fashion and lifestyle brand segment leader has enhanced No Limit’s success rate at introducing benchmarked international and local fashion labels and lifestyle trends to the Sri Lankan consumer, fully drawing on our industry experience and customer-centricity.
            </p>
            <p>
                Today, guided by an adaptive and future-ready second generation leadership, and powered by over 1250 associates. No Limit is looking to expand further across Sri Lanka’s fashionable, sensible and well-informed target market by integrating our physical stores with digital channels, creating a seamless and engaging customer experience both online and in-store.
            </p>
            <p>
                We have enabled the growth of our local industry with our endorsement of over 2000 small and medium local entrepreneurs, promoting private brands and labels through the supportive foundation of an established retail chain. And now, in keeping with our projected growth and expansion, No Limit is exploring partnerships with multinational brands and retail houses to bring the Sri Lankan consumer direct and easy access to global trends, creating unrivaled fashion and lifestyle experiences.
            </p>
            <div className="container">
                <div className="container-1">
                    <img src={mission} alt="hero" />
                    <h1>VISION</h1>
                    <p>To be recognised by every customer as the most preferred clothing chain in Sri Lanka!</p>
                </div>
                <div className="container-2">
                    <img src={vision} alt="hero" />
                    <h1>MISSION</h1>
                    <p>Our Mission is to provide society with superior products and services, matched with affordable prices through the development of both local and international brands. We also strive to improve the lifestyles of our customers through our clothing.</p>
                </div>
                <div className="container-3">
                    <img src={objective} alt="hero" />
                    <h1>OBJECTIVES</h1>
                    <p>The objective of Fashion Bug is to work as one cohesive unit and produce the best line of clothing in the fashion industry while providing a platform for employees to work at their potential in order to serve our customers better.</p>
                </div>
            </div>
            <div className="achivements">
                <h1>WHY WE'RE THE BEST IN THE INDUSTRY?</h1>
                <p>At Fashion Bug we’re dedicated to providing you with the best service combined with the highest standard of clothing in the industry. Through a culturally diverse and open staff, our working conditions and environment have never been better and thus we have been recognized by Great Place To Work™ Sri Lanka under the Best Large Sized Enterprise category on the Island! We’ve also bagged the award for the 'Best Key Account Partner' at the 2018 Annual Sales Conference of Triumph International held, at the Grand Ballroom of the Hilton Hotel, Colombo.</p>
                <div className="awards">
                    <div className="award-1">
                        <img src={award1} alt="hero" />
                    </div>
                    <div className="award-1">
                        <img src={award2} alt="hero" />
                    </div>
                    <div className="award-1">
                        <img src={award3} alt="hero" />
                    </div>
                    <div className="award-1">
                        <img src={award4} alt="hero" />
                    </div>
                    <div className="award-1">
                        <img src={award5} alt="hero" />
                    </div>
                </div>
            </div>

            
        </div>
    )

}

export default AboutUs

