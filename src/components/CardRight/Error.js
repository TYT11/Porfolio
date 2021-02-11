import React from "react";
import "./CardRight.scss";
import CryingBaby from "../../images/crying.gif";

export default function Error() {
  return (
    <div className="card-right-active card-right">
      <div className="col-title">
        <h2>OOPS</h2>
      </div>
      <div className="contact-container">
        <img src={CryingBaby} alt="" />
        <p className="notfoundtext">There's no such page.</p>
      </div>
    </div>
  );
}
