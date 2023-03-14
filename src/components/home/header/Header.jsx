import React from "react";
import '../../../style/App.css';
import Adress from "./Adress";
import Logo from "./Logo";
import Messengers from "./Messengers";
import Phone from "./Phone";

const Header = () => {
    return (
        <div className='header'>

            <Logo
                prop='header-logoLine'
            />

            <Adress
                imgClass={'geo'}
            />

            <div className="communication">
                <Phone/>

                <Messengers/>
            </div>
        </div>
    );
};

export default Header;