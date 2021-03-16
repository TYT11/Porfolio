import React from "react";
import { useState } from "react";
import "./App.scss";
import Background from "./components/Background/Background";
import CardLeft from "./components/CardLeft/CardLeft";
import CardRight from "./components/CardRight/CardRight";
import Nav from "./components/Nav/Nav";
import Languages from "./components/Languages";

export const LanguageContext = React.createContext(Languages);

function App() {
  const [lang, setLang] = useState("en_us");

  return (
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
  );
}
export default App;
