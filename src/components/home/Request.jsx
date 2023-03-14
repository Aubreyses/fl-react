import React from "react";
import '../../style/App.css';
import MyButton from "../UI/button/MyButton.jsx";

const Request = () => {
    return (
        <div className='request'>
            <form action="/" className="request-form">
                <input type="text" placeholder="+38 (___) _ _ _ - _ _ - _ _" className="request-input" />
                <MyButton
                    prop = {'button-position'}
                />
            </form>
        </div>
    );
};

export default Request;