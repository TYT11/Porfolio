import React, { Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./CardRight.css";
import "./CardRight.scss";
import "./About.scss";

const About = lazy(() => import("./About"));
const Works = lazy(() => import("./Works"));
const Contact = lazy(() => import("./Contact"));
const Blog = lazy(() => import("./Blog"));
const Error = lazy(() => import("./Error"));

const Card_right = () => {
  const location = useLocation();

  const routes = [
    { path: "/", component: About, exact: true },
    { path: "/works", component: Works, exact: false },
    { path: "/blog", component: Blog, exact: false },
    { path: "/contact", component: Contact, exact: false },
  ];

  return (
    <Suspense
      fallback={
        <div className="card-right">
          <div className="col-1-of-1"></div>
        </div>
      }
    >
      <Switch location={location}>
        {routes.map(({ path, component, exact }) => {
          return <Route path={path} component={component} exact={exact} />;
        })}
        /
        <Route component={Error} />
      </Switch>
    </Suspense>
  );
};

export default Card_right;
