import React from "react";
import '../../style/App.css';

const ContentBlock = ({blockBackground, firstLine, secondLine, thirdLine, text, numberClass}) => {
    return (
        <div className={["content-block", blockBackground].join(' ')}>
            <div className="block-title">
                <p className='yellow-letter'>{firstLine}</p>
                <p>{secondLine}</p>
                <p>{thirdLine}</p>
            </div>
            <div className="block-text">{text}</div>
            <div className={['block-number', numberClass].join(' ')}></div>
        </div>
    );
};

export default ContentBlock;