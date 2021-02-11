import React from "react";
import "./About.scss";
import { ReactComponent as LocationPing } from "../../images/svg/location-pin.svg";

const About = () => {
  return (
    <div className="card-right" id="about">
      <div className="row">
        <div className="col-1-of-2">
          <div className="col-title">
            <h2>Hey there!</h2>
          </div>

          <p>
            I'm Annie. I've been self-teaching web development for around six
            months. I built Nostalgy, a full-stack E-commerce website that uses
            React, Django, and PostgreSQL. Beside coding, I enjoy teaching
            English!
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="col-title">
            <h2>Education</h2>
          </div>

          <div className="timeframe">
            <span>2017-2020</span>
          </div>
          <div>
            <div className="col-item-title">
              <LocationPing className="location-ping" />
              National Taiwan University of Science and Technology
            </div>
            <div className="col-item-info">
              Bachelor's Degree in Business Administration
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-1">
          <div className="col-title">
            <h2>Tools</h2>
          </div>
          <div className="strength">
            <h3 className="strength-title">Languages</h3>
            <ul className="languages strength-items">
              <li className="languages-item">
                <span className="languages-bar-font">Chinese</span>
                <span className="languages-bar languages-chinese"></span>
                <span className="languages-bar-font-percent">100%</span>
              </li>
              <li className="languages-item">
                <span className="languages-bar-font">English</span>

                <span className="languages-bar languages-english"></span>
                <span className="languages-bar-font-percent-english">85%</span>
              </li>
            </ul>
          </div>
          <div className="strength">
            <h3 className="strength-title">Coding</h3>
            <ul className="coding strength-items">
              <li className="coding-item">HTML</li>
              <li className="coding-item">CSS(SCSS)</li>
              <li className="coding-item">Javascript</li>
              <li className="coding-item">React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
