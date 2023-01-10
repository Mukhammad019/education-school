import React from 'react';
import {Routes, Route} from "react-router-dom"
import Courses from "./Courses/Courses";
import FreeWorkshops from "./FreeWorkshops/FreeWorkshops";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path={"/courses"} element={<Courses/>}/>
                <Route path={"/free"} element={<FreeWorkshops/>}/>
                <Route path={"/blogs"} element={<Blog/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
    );
};
export default Main;