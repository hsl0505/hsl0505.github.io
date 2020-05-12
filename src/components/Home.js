import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Home_t1">
        Hello, I'm <span>Hyunsung Lim. </span>
      </div>
      <div className="Home_t2">
        <span>임현성</span> 의 <span className="sp2">포트폴리오</span> 입니다 :)
      </div>
      <div className="btn_wrapper">
        <div
          className="Home_btn"
          onClick={() =>
            window.scrollTo({ top: 1006, left: 0, behavior: "smooth" })
          }
        >
          <div>VIEW</div>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
