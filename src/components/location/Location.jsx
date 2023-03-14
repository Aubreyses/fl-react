import React from "react";
import '../../style/App.css';
import MyTitle from "../UI/title/MyTitle";
import Map from "./Map";

const Location = () => {
    return (
        <div className="location">
            <MyTitle
                firstLetter = 'к'
                text = 'ак добраться'
            />

            <Map/>
        </div>
    );
};

export default Location;