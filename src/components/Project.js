import React, { Fragment } from "react";
import pf from "../image/pfproject.png";

export default function Project() {
  return (
    <Fragment>
      <div className="Project_title">
        <div className="title_text">PROJECT</div>
        <div className="title_underline"></div>
      </div>

      <div className="Project_content">
        <ul>
          <li className="first">
            <div className="firstimg" />
            <div className="explain">
              <div className="explain_title">
                개인 포트폴리오 사이트 프로젝트
              </div>
              <br />
              <div>
                현재 보고 계신 제 포트폴리오 사이트 프로젝트 입니다. Github
                Page를 이용하여 호스팅을 하였습니다. <br />
                CRA를 사용하지않고 직접 Babel과 Webpack을 설정하여
                진행하였습니다.
              </div>
              <br />
              <div>
                <span style={{ fontWeight: "bold", color: "#0b615e" }}>
                  기술스택
                </span>{" "}
                : React, React Hooks, SCSS
              </div>
              <span style={{ fontWeight: "bold", color: "#0b615e" }}>
                # 프로젝트 블로깅
              </span>{" "}
              :{" "}
              <a
                href="https://hsl1697.tistory.com/category/Project%20Devlog/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%EC%82%AC%EC%9D%B4%ED%8A%B8"
                target="blank"
              >
                블로그 보러가기
              </a>
              <div className="icons">
                <a href="https://hsl0505.github.io/" target="blank">
                  <i className="fas fa-paperclip fa-2x"></i>
                </a>
                <a
                  href="https://github.com/hsl0505/hsl0505.github.io"
                  target="blank"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </li>

          <li className="second">
            <div className="secondimg" />
            <div className="explain">
              <div className="explain_title">BillyZip 프로젝트</div>
              <br />
              <div>
                '집을 빌린다'의 의미를 나타내는 말로 구독형 주거 서비스를
                제공하는 모바일 어플리케이션 프로젝트 입니다. <br />팀
                프로젝트로 총 4주동안 진행하였습니다. 저는 프론트엔드 포지션을
                맡았었습니다.
                <br />
                프로젝트의 자세한 설명은 하단의 블로깅에 있습니다 :)
              </div>
              <br />
              <div>
                <span style={{ fontWeight: "bold", color: "#0b615e" }}>
                  기술스택
                </span>{" "}
                : ReactNative(EXPO), React Hooks, React-Navigation, Axios 등
              </div>
              <span style={{ fontWeight: "bold", color: "#0b615e" }}>
                # 프로젝트 블로깅
              </span>{" "}
              :{" "}
              <a
                href="https://hsl1697.tistory.com/76?category=383752"
                target="blank"
              >
                블로그 보러가기
              </a>
              <div className="icons">
                <a
                  href="https://www.youtube.com/watch?v=r7AFMYzc3Tc&amp;t"
                  target="blank"
                >
                  <i className="fas fa-paperclip fa-2x"></i>
                </a>
                <a
                  href="https://github.com/hsl0505/BillyZip_CLIENT"
                  target="blank"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </li>

          <li className="third">
            <div className="thirdimg" />
            <div className="explain">
              <div className="explain_title">SO Bucket 프로젝트</div>
              <br />
              <div>
                'Spread Out Bucket'의 줄임말로 자신의 버킷리스트를 관리하고
                공유서비스를 제공하는 웹 프로젝트 입니다. <br />팀 프로젝트로 총
                2주동안 진행하였습니다. 저는 풀스택 포지션을 맡았었습니다.
                <br />
                프로젝트의 자세한 설명은 하단의 블로깅에 있습니다 :)
              </div>
              <br />
              <div>
                <span style={{ fontWeight: "bold", color: "#0b615e" }}>
                  기술스택
                </span>{" "}
                : React, React-Router, AntDesign, Node(express), MySQL,
                Sequelize(CLI), JWT
              </div>
              <span style={{ fontWeight: "bold", color: "#0b615e" }}>
                # 프로젝트 블로깅
              </span>{" "}
              :{" "}
              <a
                href="https://hsl1697.tistory.com/75?category=383752"
                target="blank"
              >
                블로그 보러가기
              </a>
              <div className="icons">
                <a
                  href="https://github.com/hsl0505/SOBucket_client"
                  target="blank"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
