import React from "react";
import Circle from "./Circle";
import Arrow from "./Arrow";
import FeatureArrow from "./FeatureArrow";
import myImg from "../image/myImg.jpg";

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
        <div>
          <Circle />
          <Arrow />
          <Circle />
        </div>
        <div className="content">
          <div className="content_title">Feature : About_Me</div>
          <div className="content_box">
            <img className="content_img" alt="" src={myImg} />
            <div className="content_text">
              <div>
                저는 19년 11월, Codestates라는 부트캠프에서 Advanced Software
                Engineering Immersive Program 교육을 시작으로 개발 공부를
                시작하였습니다.
                <br />
                웹과 모바일에서의 서비스를 내 손으로 직접 만들고 이를 통해
                가치를 창출한다는 점이 매우 멋지고 재미있습니다 :)
                <br />
                현재는 React를 비롯한 프론트엔드 기술에 매력을 느껴 프론트엔드
                개발자가 되기 위해 노력중입니다.
                <br />
                제가 생각하는 좋은 개발자는 항상 성장하고 같이 일하고 싶은
                개발자입니다. 그리고 저는 이러한 개발자가 되고 싶습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
