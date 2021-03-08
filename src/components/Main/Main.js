import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import Info from "../Info/Info";

export default function Main() {
  return (
    <div className='main-wrapper'>
      <Info />
      <Card />
    </div>
  );
}
