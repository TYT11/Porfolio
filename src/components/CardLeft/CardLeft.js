import React from "react";
import "./CardLeft.scss";

const CardLeft = ({ setLang }) => {
  return (
    <div className="left">
      <div className="card">
        <div className="card-pic"></div>

        <div className="card-info">
          <h1>YI-TING</h1>
          <p>Front-end Developer</p>
        </div>

        <select
          className="lang-select"
          onChange={(e) => {
            setLang(e.target.value);
          }}
        >
          <option value="en_us">English</option>
          <option value="zh_tw">中文</option>
        </select>

        <div className="card-buttons">
          <a className="button" href="https://github.com/TYT11">
            <button className="button-github"></button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardLeft;
