import React from 'react';
import {Routes, Route} from "react-router-dom"
import Courses from "./Courses/Courses";
import About from "./About/About";
import Contact from "./Contact/Contact";
import HomePage from "./Homepage/HomePage";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/courses"} element={<Courses/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
    );
};
export default Main;