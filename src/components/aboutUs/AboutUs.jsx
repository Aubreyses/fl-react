import React from "react";
import '../../style/App.css';
import MyTitle from "../UI/title/MyTitle";

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <MyTitle
                firstLetter = 'о'
                text = ' нашей станции'
            />

            <div className="aboutUs-content">
                <img src="aboutUs-big.jpg" alt="" className="aboutUs-bigImg" />
                <div className="aboutUs-column">
                    <img src="aboutUs-column1.jpg" alt="" className="aboutUs-litleImg" />
                    <img src="aboutUs-column2.jpg" alt="" className="aboutUs-litleImg" />
                </div>
            </div>
            <div className="aboutUs-text">
                Узкопрофильные специалисты в чистке фильтров, мы занимаемся этим с 1990 года на самом современном
                оборудовании которое позволяет чинить новейшие модели авто, регулярно увеличиваем квалификацию и
                обновляем техническую базу... Узкопрофильные специалисты в чистке фильтров, мы занимаемся этим с
                1990 года на самом современном оборудовании которое позволяет чинить новейшие модели авто, регулярно
                увеличиваем квалификацию и обновляем техническую базу... Узкопрофильные специалисты в чистке фильтров,
                мы занимаемся этим с 1990 года на самом современном оборудовании которое позволяет чинить новейшие модели авто,
                регулярно увеличиваем квалификацию и обновляем техническую базу...
            </div>
        </div>
    );
};

export default AboutUs;