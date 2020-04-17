import React from "react";
import Circle from "./Circle";
import Arrow from "./Arrow";
import FeatureArrow from "./FeatureArrow";

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="AboutMe_branch">
        <div className="master">
          <Circle />
          <Arrow />
        </div>
        <FeatureArrow />
      </div>
      <div className="AboutMe_content">
        <Circle />
        테스트
      </div>
    </div>
  );
}
