import React from "react";
import "./App.css";
import HttpsRedirect from "react-https-redirect";
import Info from "./components/Card/Card";
import Card from "./components/Info/Info";
import Header from "./components/Header/Header";

function App() {
  return (
    <HttpsRedirect>
      <div className="main">
        <div className="green1"></div>
        <div className="green2"></div>
        <div className="bg"></div>
        <div className="wrapper">
          <Header />
          <Info />
          <Card />
        </div>
      </div>
    </HttpsRedirect>
  );
}

export default App;
