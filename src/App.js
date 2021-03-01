import "./App.css";
import Card from "./components/Card/Card";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="main">
      <div className="green1"></div>
      <div className="green2"></div>
      <div className="bg"></div>
      <div className="wrapper">
        <Info />
        <Card />
      </div>
    </div>
  );
}

export default App;
