import React, { Fragment } from "react";
import myImg from "../image/myImg.jpg";

export default function About(props) {
  const {
    aboutTitleText,
    aboutTitleUnder,
    aboutIcon,
    aboutMyImg,
    aboutMyText,
    aboutMySkillText,
    aboutMySkillContent,
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
              새로운 것을 배우는 걸 좋아하고, 성취감과 보람을 느끼는 일을
              좋아합니다. {window.innerWidth <= 1279 ? <br /> : ""}
              Codestates라는 코딩 부트캠프에서
              {window.innerWidth > 1279 ? <br /> : " "}
              Advanced Software Engineering Immersive Program
              {window.innerWidth <= 1023 ? <br /> : " "}교육을 시작으로 개발
              공부를 시작하였습니다. <br />
              현재는 React를 비롯한 프론트엔드 기술에 매력을 느껴 프론트엔드
              개발자가 되기 위해 노력중입니다. <br />
              저는 항상 성장하고 같이 일하고 싶은 개발자가 되고 싶습니다.
              <br />
              <div style={{ fontWeight: "bold", textAlign: "center" }}>
                저의 포트폴리오를 봐주셔서 감사합니다 :)
              </div>
            </div>
          </div>
          <div className="mySkills">
            <div
              className="mySkills_title"
              style={aboutMySkillText ? { display: "block" } : {}}
            >
              SKILL SET
            </div>
            <table style={aboutMySkillContent ? { display: "block" } : {}}>
              <tbody>
                <tr>
                  <th>HTML</th>
                  <td>HTML5, Semantic HTML</td>
                </tr>
                <tr>
                  <th>CSS</th>
                  <td>CSS3, SCSS</td>
                </tr>
                <tr>
                  <th>JavaScript</th>
                  <td>ES 2015(ES6)+, DOM</td>
                </tr>
                <tr>
                  <th>React</th>
                  <td>React, React Hooks, React-Router</td>
                </tr>
                <tr>
                  <th>TypeScript</th>
                  <td>TypeScript 프로젝트 경험</td>
                </tr>
                <tr>
                  <th>Redux</th>
                  <td>현재 학습중입니다 :)</td>
                </tr>
                <tr>
                  <th>ReactNative</th>
                  <td>RN(EXPO), React-Navigation</td>
                </tr>
                <tr>
                  <th>Node.js</th>
                  <td>Express로 서버 구축, REST API 구축 경험</td>
                </tr>
                <tr>
                  <th>MySQL</th>
                  <td>SQL 사용, RDBS 설계 경험</td>
                </tr>
                <tr>
                  <th>Sequelize</th>
                  <td>Sequelize CLI 사용 경험</td>
                </tr>
                <tr>
                  <th>AWS</th>
                  <td>S3, EC2, RDS 사용 경험</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
