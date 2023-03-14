import React from "react";
import '../../style/App.css';
import MyTitle from "../UI/title/MyTitle.jsx";
import ContentBlock from "./ContentBlock";

const Stages = () => {
    return (
        <div className="stages">
            <MyTitle
                firstLetter = 'к'
                text = 'ак мы работаем'
            />

            <div className="content-line firstLine">
                <ContentBlock
                    blockBackground={'firstBlockBg'}
                    firstLine={'предварительная'}
                    secondLine={'компьютерная'}
                    thirdLine={'диагностика'}
                    text={`Для определения степени загрязнения,  делаем компьютерную диагностику,
                        тем самым определяем отклонения от нормы и количества загрязнения сажевого фильтра`}
                    numberClass={'firstNumber'}
                />
                <ContentBlock
                    blockBackground={'secondBlockBg'}
                    firstLine={'Демонтаж'}
                    secondLine={'DPF'}
                    thirdLine={'фильтра'}
                    text={`Производим демонтаж DPF сажевого фильтра или катализатора, при необходимости меняем
                        расходные материалы, болты и прокладки`}
                    numberClass={'secondNumber'}
                />
            </div>
            <div className="content-line secondLine">
                <ContentBlock
                    blockBackground={'thirdBlockBg'}
                    firstLine={'Диагностика на'}
                    secondLine={'специализированном'}
                    thirdLine={'стенде'}
                    text={`Предварительно перед промывкой в обязательном порядке совершаются замеры отрицательного
                        давления и степени загрязнения фильтра`}
                    numberClass={'thirdNumber'}
                />
                <ContentBlock
                    blockBackground={'forthBlockBg'}
                    firstLine={'Чистка'}
                    secondLine={'и дегидратация'}
                    thirdLine={'сажевого фильтра'}
                    text={`Процедура чистки специальными деактивирующими  жидкостями в промывочном стенде, удаление
                        влаги, которая позволяет избежать рецидивов засорения фильтра.`}
                    numberClass={'fourthNumber'}
                />
            </div>
            <div className="content-line thirdLine">
                <ContentBlock
                    blockBackground={'fifthBlockBg'}
                    firstLine={'Проверка'}
                    secondLine={'после'}
                    thirdLine={'прочистки'}
                    text={`Данная процедура позволяет закрепить результат и  исключить возможность остаточных отложений. 
                        При повторной проверке мы получаем аналитические отчеты в печатном виде, которые подкрепляються к выполненным работам`}
                    numberClass={'fifthNumber'}
                />
            </div>
        </div>
    );
};

export default Stages;