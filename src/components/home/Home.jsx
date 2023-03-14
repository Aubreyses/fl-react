import React from "react";
import '../../style/App.css';
import Header from "./header/Header";
import Nav from "./Nav";
import Main from "./Main";
import Request from "./Request";

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <Nav/>
            <Main/>
            <Request/>
        </div>
    );
};

export default Home;