import React from "react"
import "./CSS/SizeGuide.css"
import size from "./Assets/size.webp";

const SizeGuide = () => {
    return (
        <div className="size">
            <h1>SIZE GUIDE</h1>
            <hr />
            <h2>PLEASE FIND THE GENERAL SIZE CHART AS BELOW</h2>
            <img src={size} alt="" />
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )

}

export default SizeGuide

