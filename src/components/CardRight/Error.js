import React from "react";
import "./Contact.scss";
import CryingBaby from "../../images/crying.gif";
import Head from "./Head";

export default function Error() {
  return (
    <div className="card-right-active card-right">
      <Head title="Oops!" desc="Something went wrong." noRobo="true" />
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
