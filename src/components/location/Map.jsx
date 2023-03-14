import React from "react";
import '../../style/App.css';
import Adress from "../home/header/Adress";
import Messengers from "../home/header/Messengers";
import Phone from "../home/header/Phone";

const Map = () => {
    return (
        <div className="map">
            <div className="map__info-block">
                <Adress
                    imgClass={'geo-home'}
                />
                <Phone/>
                <Messengers/>
            </div>
        </div>
    );
};

export default Map;