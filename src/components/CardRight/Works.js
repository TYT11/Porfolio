import React from "react";
import "../CSS/layout.scss";
import "./Works.scss";
import Search from "../../images/svg/search.svg";

import Porfolio_l from "../../images/porfolio_large.png";
import Porfolio_m from "../../images/porfolio_medium.png";
import Porfolio_s from "../../images/porfolio_small.png";

import Ecommerce_l from "../../images/e-commerce_cropped_large.png";
import Ecommerce_m from "../../images/e-commerce_cropped_medium.png";
import Ecommerce_s from "../../images/e-commerce_cropped_small.png";

import Head from "./Head";

const Works = () => {
  return (
    <div className="card-right" id="works">
      <Head title="Works" desc="A collection of my personal projects." />

      <div className="col">
        <div className="col-left works-col">
          <a href="https://marionia.herokuapp.com/" target="blank">
            <div className="col-img">
              <img
                src={Ecommerce_l}
                alt="Screenshot of my full-stack E-Commerce website."
                srcSet={`${Ecommerce_l} 1024w, ${Ecommerce_m} 640w, ${Ecommerce_s} 320w`}
                sizes="(max-width: 620px) 70vw, (max-width:1024px) 40vw, 20vw"
              />
              <div className="col-img-file">
                <img src={Search} alt="click to learn more icon"></img>
              </div>
            </div>
          </a>

          <div className="col-info">
            <div className="col-title">
              <h2>Marionia</h2>
            </div>

            <p>
              A full-stack store with user auth, shopping cart, order management
              and childhood memories! Front-end and back-end are decoupled.
            </p>
            <ul className="work-items">
              <li>RWD</li>
              <li>SCSS</li>
              <li>REACT</li>
              <li>CRUD</li>
              <li>DRF</li>
            </ul>
          </div>
        </div>

        <div className="col-right works-col">
          <div className="col-info">
            <div className="col-title">
              <h2>Porfolio (here!)</h2>
            </div>
            <p>
              A single-page application built with React. I used it as a css
              practice.
            </p>
            <ul className="work-items">
              <li>RWD</li>
              <li>SCSS</li>
              <li>REACT</li>
            </ul>
          </div>

          <div className="col-img">
            <img
              src={Porfolio_l}
              alt="Screenshot of my porfolio website."
              srcSet={`${Porfolio_l} 1024w, ${Porfolio_m} 640w, ${Porfolio_s} 320w`}
              sizes="(max-width: 620px) 70vw, (max-width:1024px) 40vw, 20vw"
            />
            <div className="col-img-file">
              <img src={Search} alt="click to learn more icon"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
