import React from "react";
import { useState } from "react";
import "./App.scss";
import Background from "./components/Background/Background";
import CardLeft from "./components/CardLeft/CardLeft";
import CardRight from "./components/CardRight/CardRight";
import Nav from "./components/Nav/Nav";
import Languages from "./components/Languages";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export const LanguageContext = React.createContext(Languages);

function App() {
  const [lang, setLang] = useState("en_us");

  return (
    <HelmetProvider>
      <Router>
        <div className="container">
          <Background />
          <LanguageContext.Provider value={Languages[lang]}>
            <div className="container-open">
              <Nav />
              <CardLeft setLang={setLang} />
              <CardRight />
            </div>
          </LanguageContext.Provider>
        </div>
      </Router>
    </HelmetProvider>
  );
}
export default App;
