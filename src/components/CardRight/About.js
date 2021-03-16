import React from "react";
import "../CSS/layout.scss";
import { ReactComponent as LocationPing } from "../../images/svg/location-pin.svg";
import Head from "./Head";
import { useContext } from "react";
import { LanguageContext } from "../../App";

const About = () => {
  const lang = useContext(LanguageContext);
  return (
    <div className="card-right" id="about">
      <Head title="About" desc="Get to know me a little bit more." />
      <div className="row">
        <div className="col-1-of-2">
          <div className="col-title">
            <h2>{lang.intro}</h2>
          </div>

          <p>{lang.introText}</p>
        </div>
        <div className="col-1-of-2">
          <div className="col-title">
            <h2>{lang.edu}</h2>
          </div>

          <div className="timeframe">
            <span>2017-2020</span>
          </div>
          <div>
            <div className="col-item-title">
              <LocationPing className="location-ping" />
              {lang.eduSchool}
            </div>
            <div className="col-item-info">{lang.eduSchoolDeg} </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-1">
          <div className="col-title">
            <h2>{lang.toolTitle}</h2>
          </div>
          <div className="strength">
            <h3 className="strength-title">{lang.languages}</h3>
            <ul className="languages strength-items">
              <li className="languages-item">
                <span className="languages-bar-font">{lang.chinese}</span>
                <span className="languages-bar languages-chinese"></span>
                <span className="languages-bar-font-percent">100%</span>
              </li>
              <li className="languages-item">
                <span className="languages-bar-font">{lang.english}</span>
                <span className="languages-bar languages-english"></span>
                <span className="languages-bar-font-percent-english">85%</span>
              </li>
            </ul>
          </div>
          <div className="strength">
            <h3 className="strength-title">{lang.coding}</h3>
            <ul className="coding strength-items">
              <li className="coding-item">HTML</li>
              <li className="coding-item">CSS(SCSS)</li>
              <li className="coding-item">Javascript</li>
              <li className="coding-item">React</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-1 ">
          <div className="col-title">
            <h2>{lang.courses}</h2>
          </div>

          <div className="course">
            <a
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              className="course-card"
              target="blank"
            >
              <h4>Advanced CSS and Sass</h4>

              <div className="course-author">by Jonas Schmedtmann</div>
            </a>

            <a
              href="https://www.udemy.com/course/the-complete-javascript-course/"
              className="course-card"
              target="blank"
            >
              <h4>The Complete JavaScript Course</h4>
              <div className="course-author">by Jonas Schmedtmann</div>
            </a>

            <a
              href="https://www.udemy.com/course/understand-javascript/"
              className="course-card"
              target="blank"
            >
              {" "}
              <h4>JavaScript: Understanding the Weird Parts</h4>
              <div className="course-author">by Anthony Alicea </div>
            </a>
            <a
              href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
              className="course-card"
              target="blank"
            >
              {" "}
              <h4> Web Programming with Python and JavaScript</h4>
              <div className="course-author">by David Malan, Brian Yu</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
