import React from "react";
import '../../../style/App.css';

const Messengers = () => {
    return (
        <div className="messengers">
            <a href="/" className="messengers-link telegram"></a>
            <a href="/" className="messengers-link viber"></a>
            <a href="/" className="messengers-link whatsapp"></a>
        </div>
    );
};

export default Messengers;