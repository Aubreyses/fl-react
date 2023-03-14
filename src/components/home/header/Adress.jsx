import React from "react";
import '../../../style/App.css';

const Adress = ({imgClass}) => {
    return (
        <div className="adress">
            <div className={["adress-img", imgClass].join(' ')}></div>
            <a href="/" className="adress-link">
                <p>г. Киев</p>
                <p>ул. Большая Окружная, 4</p>
            </a>
        </div>
    );
};

export default Adress;