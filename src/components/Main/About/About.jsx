import React from "react";
import s from "./About.module.scss";
import kids from "./images/kids.webp";
import secondkids from "./images/2kids.webp";
import first from "./images/first.webp";
import second from "./images/second.webp";
import third from "./images/third.webp";
import forth from "./images/forth.webp";

const About = () => {
  return (
    <div className={s.wrapper}>
      <container className={s.container}>
        <img
          className="animate__animated animate__fadeInLeft"
          src={kids}
          alt="Картинка не прогрузилась"
        />
        <div className={`${s.content} animate__animated animate__fadeInRight`}>
          <h1>Our site</h1>
          <p>
            One of the leading platforms for preparing students for the exam.
            Winner competition "100 best USE-Centres of Russia" in the
            nomination "Best distance learning platform.
          </p>
        </div>
      </container>
      <container className={s.secondContainer}>
        <div>
          <h1 className="animate__animated animate__fadeInUp">754</h1>
          <p className="animate__animated animate__fadeInUp">
            Graduates who successfully passed the exam
          </p>
        </div>
        <div>
          <h1 className="animate__animated animate__fadeInUp">84</h1>
          <p className="animate__animated animate__fadeInUp">
            teachers and methodologists
          </p>
        </div>
        <div>
          <h1 className="animate__animated animate__fadeInUp">1120</h1>
          <p className="animate__animated animate__fadeInUp">
            pupils every year
          </p>
        </div>
      </container>
      <div className={s.thirdContainer}>
        <div className={`${s.content} animate__animated animate__fadeInLeft`}>
          <h1>Who will suit?</h1>
          <p>Excellent students,</p>
          <p>
            as well as children who want to deepen their knowledge and gain new
            skills. 45% of parents choose our platform to improve their
            assessments, quality of education and knowledge.
          </p>
        </div>
        <img
          className="animate__animated animate__fadeInRight"
          src={secondkids}
          alt=""
        />
      </div>
      <container className={s.last}>
        <h1>Why us?</h1>
        <div className={s.images}>
          <div>
            <img
              className="animate__animated animate__fadeInLeft"
              src={first}
              alt="Картинка не прогрузилась"
            />
            <p>Additional education and socialization</p>
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInLeft"
              src={second}
              alt="Картинка не прогрузилась"
            />
            <p>Enhanced preparation for the exam</p>
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight"
              src={third}
              alt="Картинка не прогрузилась"
            />
            <p>Individual curriculum for GEF</p>
          </div>
          <div>
            <img
              className="animate__animated animate__fadeInRight"
              src={forth}
              alt="Картинка не прогрузилась"
            />
            <p>Face-to-face online classes in limited classrooms</p>
          </div>
        </div>
      </container>
    </div>
  );
};

export default About;
