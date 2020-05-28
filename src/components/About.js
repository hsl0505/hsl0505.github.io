import React, { Fragment } from "react";
import myImg from "../image/myImg.jpg";

export default function About(props) {
  const {
    aboutTitleText,
    aboutTitleUnder,
    aboutIcon,
    aboutMyImg,
    aboutMyText,
  } = props;

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
            <img
              alt="내사진"
              src={myImg}
              style={aboutMyImg ? { display: "block" } : {}}
            />
            <div
              className="explainText"
              style={aboutMyText ? { display: "block" } : {}}
            >
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
            </div>
          </div>
          <div className="mySkills">
            <div
              className="mySkills_title"
              style={aboutMyImg ? { display: "block" } : {}}
            >
              SKILL SET
            </div>
            <div
              className="mySkills_content"
              style={aboutMyText ? { display: "grid" } : {}}
            >
              <div className="item">
                <span>
                  HTML
                  <span className="html_tooltip">HTML5, Semantic HTML</span>
                </span>
              </div>
              <div className="item">
                <span>
                  CSS<span className="css_tooltip">CSS3, SCSS</span>
                </span>
              </div>
              <div className="item">
                <span>
                  JavaScript
                  <span className="js_tooltip">
                    ES2015(ES6), ES2017(ES8), DOM
                  </span>
                </span>
              </div>
              <div className="item">
                <span>
                  Redux
                  <span className="redux_tooltip">
                    현재 학습중인 기술입니다 :)
                  </span>
                </span>
              </div>
              <div className="item">
                <span>
                  React
                  <span className="react_tooltip">
                    React, React Hooks, React-Router
                  </span>
                </span>
              </div>
              <div className="item">
                <span>TypeScript</span>
              </div>
              <div className="item">
                <span>
                  NodeJS
                  <span className="node_tooltip">
                    Express를 이용한 서버 구축,
                    <br />
                    REST API 구축 경험
                  </span>
                </span>
              </div>
              <div className="item">
                <span>
                  MySQL
                  <span className="sql_tooltip">RDBS 설계 경험</span>
                </span>
              </div>
              <div className="item">
                <span>
                  Sequelize
                  <span className="seq_tooltip">Sequelize CLI</span>
                </span>
              </div>
              <div className="item">
                <span>
                  AWS
                  <span className="aws_tooltip">S3, EC2, RDS 사용 경험</span>
                </span>
              </div>
              <div className="item">
                <span>
                  React-Native
                  <span className="rn_tooltip">RN(EXPO), React-Navigation</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
