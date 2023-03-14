import React from "react";
import '../../style/App.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <a href="/" className="nav-link">
                <span className='yellow-letter'>э</span>тапы
            </a>
            <a href="/" className="nav-link">
                <span className='yellow-letter'>о</span>борудование
            </a>
            <a href="/" className="nav-link">
                <span className='yellow-letter'>к</span>арта
            </a>
            <a href="/" className="nav-link">
                <span className='yellow-letter'>о</span> нас
            </a>
        </nav>
    );
};

export default Nav;