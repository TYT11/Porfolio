import React from "react";
import "../CSS/layout.scss";
import { ReactComponent as LocationPing } from "../../images/svg/location-pin.svg";
import Head from "./Head";

const About = () => {
  return (
    <div className="card-right" id="about">
      <Head title="About" desc="Get to know me a little bit more." />
      <div className="row">
        <div className="col-1-of-2">
          <div className="col-title">
            <h2>Hey there!</h2>
          </div>

          <p>
            I've been self-teaching web development for around eight months. I
            built this site and{" "}
            <a
              href="https://marionia.herokuapp.com/"
              style={{ color: "#888", fontWeight: "800" }}
            >
              Marionia
            </a>
            , a full-stack E-commerce store that brings back good old memories!
            I'm passionate with learning both Web and English :)
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
            <h2>Tool Kit</h2>
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
