import React from "react";
import '../../../style/App.css';

const Logo = ({prop}) => {
    return (
        <div className={["header-logo", prop].join(' ')}>
            <div className="logo-img"></div>
            <div className="logo-title">
                <p><span className="yellow-letter">d</span>pf</p>
                <p><span className="grey-letter">c</span>lean</p>
            </div>
        </div>
    );
};

export default Logo;