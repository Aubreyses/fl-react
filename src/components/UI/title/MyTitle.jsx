import React from 'react';
import cl from './MyTitle.module.css';

const MyTitle = ({firstLetter, text}) => {
    return (
        <div className={cl.myTitle}>
            <span className='yellow-letter'>{firstLetter}</span>{text}
        </div>
    );
};

export default MyTitle;