import React from "react";
import "./Nav.scss";
import { ReactComponent as Profile } from "../../images/svg/001-user.svg";
import { ReactComponent as Work } from "../../images/svg/002-painter.svg";
import { ReactComponent as Doc } from "../../images/svg/004-list.svg";
import { ReactComponent as Phone } from "../../images/svg/003-call.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <input
        type="checkbox"
        id="Nav-toggle-hidden"
        className="Nav-toggle-hidden"
      />
      <label className="Nav-toggle" for="Nav-toggle-hidden">
        <div className="Nav-toggle-line"></div>
      </label>

      <ul className="Nav-content">
        <NavLink
          exact
          to={`/`}
          activeClassName="Nav-list-active"
          className="Nav-list"
        >
          <li>
            <div>
              <Profile className="Nav-icon" />
            </div>
            <span className="Nav-title"> ABOUT</span>
          </li>
        </NavLink>

        <NavLink
          to={`/works`}
          activeClassName="Nav-list-active"
          className="Nav-list"
        >
          <li>
            <Work className="Nav-icon" />
            <span className="Nav-title"> WORKS</span>
          </li>
        </NavLink>

        <NavLink
          to={`/blog`}
          activeClassName="Nav-list-active"
          className="Nav-list"
        >
          <li>
            <div>
              <Doc className="Nav-icon" />
            </div>
            <span className="Nav-title"> NOTES</span>{" "}
          </li>
        </NavLink>

        <NavLink
          to={`/contact`}
          activeClassName="Nav-list-active"
          className="Nav-list"
        >
          <li>
            <div>
              <Phone className="Nav-icon" />
            </div>
            <span className="Nav-title"> CONTACT</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
