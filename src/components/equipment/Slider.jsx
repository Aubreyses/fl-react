import React, { useState } from "react";
import '../../style/App.css';
import { swipeLeft, swipeRight } from "../utils/slider";

const Slider = () => {
    const [rightRetreat, setRightRetreat] = useState(0);

    return (
        <div className="slider">
            <div className="slider-outher-block">
                <div className="slider-inner-block">
                    <img src="slider-img.jpg" alt="" className="slider-img" />
                    <img src="slider-img.jpg" alt="" className="slider-img" />
                    <img src="slider-img.jpg" alt="" className="slider-img" />
                </div>

                <div className="arrows-line">
                    <button className="arrow arrow-left" onClick={() => swipeLeft(rightRetreat, setRightRetreat)}></button>
                    <button className="arrow arrow-right" onClick={() => swipeRight(rightRetreat, setRightRetreat)}></button>
                </div>
            </div>
            <div className="slider-indicator">
                <div className="indicate-point active"></div>
                <div className="indicate-point"></div>
                <div className="indicate-point"></div>
            </div>
        </div>
    );
};

export default Slider;