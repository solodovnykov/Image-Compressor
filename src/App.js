import React, { Suspense } from "react";
import "./App.css";
import HttpsRedirect from "react-https-redirect";
const Card = React.lazy(() => import("./components/Card/Card"));
const Info = React.lazy(() => import("./components/Info/Info"));

function App() {

  return (
    <HttpsRedirect>
      <Suspense fallback={<div>Загрузка...</div>}>
        <div className="main">
          <div className="green1"></div>
          <div className="green2"></div>
          <div className="bg"></div>
          <div className="wrapper">
            <Info />
            <Card />
          </div>
        </div>
      </Suspense>
    </HttpsRedirect>
  );
}

export default App;
