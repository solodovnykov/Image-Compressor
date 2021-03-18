import React, { Suspense } from "react";
import "./Main.css";
import CardLoader from "../CardLoader/CardLoader";
import InfoLoader from "../InfoLoader/InfoLoader";
const Card = React.lazy(() => import("../Card/Card"));
const Info = React.lazy(() => import("../Info/Info"));

export default function Main() {
  return (
    <div className="main-wrapper">
      <Suspense fallback={<InfoLoader />}>
        <Info />
      </Suspense>

      <Suspense fallback={<CardLoader />}>
        <Card />
      </Suspense>
    </div>
  );
}
