import React from "react";
import '../../style/App.css';
import MyTitle from "../UI/title/MyTitle";
import Slider from "./Slider";

const Equipment = () => {
    return (
        <div className="equipment">
            <MyTitle
                firstLetter = 'о'
                text = 'борудование'
            />

            <Slider/>

            <div className="eqiupment-text">
                Мы выполняем чистку/мойку сажевых фильтров на профессиональном промышленном оборудовании, 
                с соблюдением заводских норм и при полной стерильности. Мы можем полностью гарантировать 
                результат от своей работы. Работы по чистке фильтров DPF выполняют только квалифицированные 
                специалисты которые прошли обучение по данному направлению, что позволяет нам быть уверенным в качестве своей работы.
            </div>
        </div>
    );
};

export default Equipment;