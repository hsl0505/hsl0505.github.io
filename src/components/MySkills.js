import React from "react";
import Circle from "./Circle";
import Arrow from "./Arrow";
import FeatureArrow from "./FeatureArrow";

export default function MySkills() {
  return (
    <div className="MySkills">
      <div className="MySkills_branch">
        <div className="master">
          <Circle />
          <Arrow />
        </div>
        <FeatureArrow />
      </div>
      <div className="MySkills_content">
        <div>
          <Circle />
          <Arrow />
          <Circle />
        </div>
        <div className="content">
          <div className="content_title">Feature : My_Skills</div>
        </div>
      </div>
    </div>
  );
}
