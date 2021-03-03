import "./App.css";
import Card from "./components/Card/Card";
import Info from "./components/Info/Info";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <div className="main">
        <div className="green1"></div>
        <div className="green2"></div>
        <div className="bg"></div>
        <div className="wrapper">
          <Info />
          <Card />
        </div>
      </div>
    </HttpsRedirect>
  );
}

export default App;
