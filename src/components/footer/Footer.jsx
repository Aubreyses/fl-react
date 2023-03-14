import React from "react";
import '../../style/App.css';
import Logo from "../home/header/Logo";
import Adress from "../home/header/Adress";
import Messengers from "../home/header/Messengers";
import Phone from "../home/header/Phone";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <Logo/>

                    <div className="footer-author">
                        <p>© DPF Clean</p>
                        <p>Все права защищены</p>
                    </div>
                </div>

                <nav className="footer-nav">
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

                <div className="footer-links">
                    <Adress
                        imgClass={'geo-home'}
                    />
                    <Phone/>
                    <Messengers/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;