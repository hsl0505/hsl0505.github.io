import React, { Fragment } from "react";
import myImg from "../image/myImg.jpg";

export default function About(props) {
  const { aboutTitleText, aboutTitleUnder, aboutIcon } = props;

  return (
    <Fragment>
      <div className="About_title">
        <div
          className="title_text"
          style={aboutTitleText ? { display: "block" } : {}}
        >
          ABOUT
        </div>
        <div
          className="title_underline"
          style={aboutTitleUnder ? { display: "block" } : {}}
        ></div>
      </div>

      <div className="About_content">
        <div className="About_myVision">
          <div className="myVision1">
            <div
              className="icon_wrapper"
              style={aboutIcon ? { display: "flex" } : {}}
            >
              <i className="fas fa-rocket fa-7x"></i>
            </div>

            <div
              className="vision_text"
              style={aboutIcon ? { display: "block" } : {}}
            >
              항상 <span>성장</span>하는 개발자
            </div>
          </div>
          <div className="myVision2">
            <div
              className="icon_wrapper"
              style={aboutIcon ? { display: "flex" } : {}}
            >
              <i className="fas fa-users fa-7x"></i>
            </div>

            <div
              className="vision_text"
              style={aboutIcon ? { display: "block" } : {}}
            >
              같이 <span>일하고 싶은</span> 개발자
            </div>
          </div>
        </div>

        <div className="About_meExplain">
          <div className="myImg">
            <img alt="내사진" src={myImg} />
            <div className="explainText">
              <div className="explainText_title">
                반갑습니다 ! 저는 <span>임현성</span>입니다.
              </div>
              저는 2019년 11월, Codestates라는 부트캠프에서 Advanced Software
              Engineering Immersive Program
              <br />
              교육을 시작으로 개발 공부를 시작하였습니다. 현재는 React를 비롯한
              프론트엔드 기술에 매력을 느껴
              <br />
              프론트엔드 개발자가 되기 위해 노력중입니다. 저는 항상 성장하고
              같이 일하고 싶은 개발자가 되고 싶습니다.
              <br />
              <div className="explainText_close">
                저의 포트폴리오를 봐주셔서 감사합니다 :)
              </div>
            </div>
          </div>
          <div className="mySkills">
            <div className="bestSkills">
              <div className="bestSkills_title">
                제가 좋아하고 사용하고 있는 <span>기술스택</span>입니다
              </div>
              <div className="bestSkills_icon">
                <div className="icon_wrapper">
                  <div className="htmlIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="cssIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="jsIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="tsIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="reactIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="gitIcon"></div>
                </div>
              </div>
            </div>

            <div className="experienceSkills">
              <div className="experienceSkills_title">
                제가 사용해본 적이 있는 <span>기술스택</span>입니다
              </div>
              <div className="experienceSkills_icon">
                <div className="icon_wrapper">
                  <div className="expoIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="nodeIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="expressIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="mysqlIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="seqIcon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="s3Icon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="ec2Icon"></div>
                </div>
                <div className="icon_wrapper">
                  <div className="rdsIcon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
