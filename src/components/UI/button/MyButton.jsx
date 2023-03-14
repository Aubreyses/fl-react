import React from 'react';
import cl from './MyButton.module.css';

const MyButton = (prop) => {
    return (
        <button className={[cl.myBtn, prop.prop].join(' ')}>
            Записаться на консультацию
        </button>
    );
};

export default MyButton;