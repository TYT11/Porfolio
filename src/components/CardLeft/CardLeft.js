import React from "react";
import "./CardLeft.scss";

const CardLeft = () => {
  return (
    <div className="left">
      <div className="card">
        <div className="card-pic"></div>

        <div className="card-info">
          <h1>YI-TING</h1>
          <p>Front-end Developer</p>
          <p>Taipei, TW</p>
        </div>

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
