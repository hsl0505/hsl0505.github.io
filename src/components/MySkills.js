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
          <div className="content_box">
            <div className="current_skills">
              <div className="current_title">
                Commit : " 제가 다루어봤거나 사용하고 있는 기술 스택입니다 "
              </div>
              <div className="Icons">
                <div className="iconBox JS">
                  <div className="Icon JS"></div>
                  <div className="inner_text JS">JavaScript</div>
                </div>
                <div className="iconBox HTML">
                  <div className="Icon HTML"></div>
                  <div className="inner_text HTML">HTML</div>
                </div>
                <div className="iconBox CSS">
                  <div className="Icon CSS"></div>
                  <div className="inner_text CSS">CSS</div>
                </div>
                <div className="iconBox react">
                  <div className="Icon react"></div>
                  <div className="inner_text react">
                    React
                    <br />
                    <br />
                    React Hook
                  </div>
                </div>
                <div className="iconBox expo">
                  <div className="Icon expo"></div>
                  <div className="inner_text expo">
                    React Native
                    <br />
                    <br />
                    EXPO
                  </div>
                </div>
                <div className="iconBox TS">
                  <div className="Icon TS"></div>
                  <div className="inner_text TS">TypeScript</div>
                </div>
                <div className="iconBox node">
                  <div className="Icon node"></div>
                  <div className="inner_text node">Node.js</div>
                </div>
              </div>
              <div className="Icons">
                <div className="iconBox express">
                  <div className="Icon express"></div>
                  <div className="inner_text express">Express</div>
                </div>
                <div className="iconBox mysql">
                  <div className="Icon mysql"></div>
                  <div className="inner_text mysql">MySQL</div>
                </div>
                <div className="iconBox sequelize">
                  <div className="Icon sequelize"></div>
                  <div className="inner_text sequelize">Sequelize</div>
                </div>
                <div className="iconBox git">
                  <div className="Icon git"></div>
                  <div className="inner_text git">Git</div>
                </div>
                <div className="iconBox s3">
                  <div className="Icon s3"></div>
                  <div className="inner_text s3">S3</div>
                </div>
                <div className="iconBox ec2">
                  <div className="Icon ec2"></div>
                  <div className="inner_text ec2">EC2</div>
                </div>
                <div className="iconBox rds">
                  <div className="Icon rds"></div>
                  <div className="inner_text rds">RDS</div>
                </div>
              </div>
            </div>

            <div className="interest_skills">
              <div className="interest_title">
                Commit : " 제가 현재 관심이 있고 공부하고 있는 기술 스택입니다 "
              </div>
              <div className="Icons">
                <div className="iconBox redux">
                  <div className="Icon redux"></div>
                  <div className="inner_text redux">Redux</div>
                </div>
                <div className="iconBox firebase">
                  <div className="Icon firebase"></div>
                  <div className="inner_text firebase">Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
