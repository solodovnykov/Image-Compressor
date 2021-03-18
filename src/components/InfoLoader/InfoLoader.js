import React from "react";
import "./InfoLoader.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function InfoLoader() {
  return (
    <div className="info-loader">
      <SkeletonTheme color="#727272" highlightColor="#888">
        <Skeleton
          style={{ marginTop: "20px", maxWidth: "350px", width: "100%" }}
          duration={1}
          height={40}
        />
        <Skeleton
          style={{ marginTop: "20px", maxWidth: "280px", width: "100%" }}
          duration={1}
          height={40}
        />
        <Skeleton
          style={{ marginTop: "20px", maxWidth: "300px", width: "100%" }}
          duration={1}
          height={100}
        />
      </SkeletonTheme>
    </div>
  );
}
