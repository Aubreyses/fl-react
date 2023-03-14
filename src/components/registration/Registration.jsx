import React from "react";
import '../../style/App.css';
import MyButton from "../UI/button/MyButton";

const Registration = () => {
    return (
        <div className="registration">
            <div className="registration-block">
                <div className="registration-title">
                    <span className="yellow-letter">з</span>апишитесь на бесплатную диагностику прямо сейчас
                </div>
                <form action="/" className="registration-form">
                    <input type="text" placeholder="Ваше имя" className="registration-input" />
                    <input type="tel" placeholder="Номер телефона" className="registration-input" />
                    <input type="text" placeholder="Выберите дату" className="registration-input" />
                </form>
                <MyButton/>
            </div>
            <img src="registration-img.jpg" alt="/" className="registration-img" />
        </div>
    );
};

export default Registration;