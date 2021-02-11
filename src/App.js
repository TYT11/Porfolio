import React from "react";
import "./App.scss";
import Background from "./components/Background/Background";
import CardLeft from "./components/CardLeft/CardLeft";
import CardRight from "./components/CardRight/CardRight";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="container">
      <Background />

      <div className="container-open">
        <Nav />
        <CardLeft />
        <CardRight />
      </div>
    </div>
  );
}

export default App;
