import React from "react";
import "./CardRight.css";
import "./CardRight.scss";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Blog from "./Blog";
import Error from "./Error";
import { Switch, Route, useLocation } from "react-router-dom";

const Card_right = () => {
  const location = useLocation();

  const routes = [
    { path: "/", component: About, exact: true },
    { path: "/works", component: Works, exact: false },
    { path: "/blog", component: Blog, exact: false },
    { path: "/contact", component: Contact, exact: false },
  ];
  return (
    <Switch location={location}>
      {routes.map(({ path, component, exact }) => {
        return <Route path={path} component={component} exact={exact} />;
      })}
      /
      <Route component={Error} />
    </Switch>
  );
};

export default Card_right;
