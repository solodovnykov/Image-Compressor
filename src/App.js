import React from "react";
import "./App.css";
import HttpsRedirect from "react-https-redirect";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  let darkMode = localStorage.getItem('darkMode');
  
  return (
    <HttpsRedirect>
      <div id='main' className="main">
        <div className="green1"></div>
        <div className="green2"></div>
        <div className="bg"></div>
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </div>
    </HttpsRedirect>
  );
}

export default App;
