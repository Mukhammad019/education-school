import React from "react";
import s from "./header.module.scss";
import { Link } from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai"

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.header_message}>
                <div className={s.header_message_txt}>
                    One week only - 50% off all courses with code 50 OFF at checkout
                </div>
                <div className={s.close_message}>&times;</div>
            </div>
            <div className={s.header_case}>
                <div className={s.header_action}>
                    <Link to={"/home"} className={s.logo_case}>
                        <div className={s.logo}>
                            <div className={`${s.logo_1} ${s.logo_n}`}></div>
                            <div className={`${s.logo_2} ${s.logo_n}`}></div>
                            <div className={`${s.logo_3} ${s.logo_n}`}></div>
                            <div className={`${s.logo_4} ${s.logo_n}`}></div>
                        </div>
                        <div className={s.title}>Skillz</div>
                    </Link>
                    <div className={s.header_nav}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/courses"}>Courses</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <div className={s.basketCase}>
                        <AiOutlineUser/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;