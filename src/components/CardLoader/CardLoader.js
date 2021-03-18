import React from "react";
import "./CardLoader.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CardLoader() {
  return (
    <div className="card-loader">
      <SkeletonTheme color="#727272" highlightColor="#888">
        <Skeleton duration={1} height={40} width={300} />
        <Skeleton
          style={{ marginTop: "20px" }}
          duration={1}
          height={85}
          width={300}
        />

        <Skeleton
          style={{ marginTop: "20px" }}
          duration={1}
          height={200}
          width={300}
        />
      </SkeletonTheme>
    </div>
  );
}
