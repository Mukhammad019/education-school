import React from 'react';
import s from "./header.module.scss";
import { Link } from "react-router-dom";
import basket from "./images/basket2.png";
import logo from "./images/Frame.jpg";
const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.header_message}>One week only - 50% off all courses with code 50 OFF at checkout</div>
            <div className={s.header_underline_text}>
            <div className={s.header}>
                <div className={s.header_logo}>
                        <div className={s.logo}>
                            <div className={`${s.logo_1} ${s.logo_n}`}></div>
                            <div className={`${s.logo_2} ${s.logo_n}`}></div>
                            <div className={`${s.logo_3} ${s.logo_n}`}></div>
                            <div className={`${s.logo_4} ${s.logo_n}`}></div>
                        </div>
                        <div className={s.title}>Skillz</div>
                </div>
                <div className={s.header_nav}>
                    <Link to={"/courses"}>Courses</Link>
                    <Link to={"/free"}>Free Workshops</Link>
                    <Link to={"/blogs"}>Blogs</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
                <div className={s.basketCase}><img className={s.basket} src={basket} alt="..."/></div>
            </div>
            </div>
        </div>
    );
};

export default Header;