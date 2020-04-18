import React from "react";

function Home() {
  return (
    <div className="Home">
      <div className="Home_text">
        <div className="Home_t1">안녕하세요</div>
        <div className="Home_t2">임현성의 포트폴리오 입니다 :)</div>
      </div>
      <div className="contact">
        <div className="contact_list">
          <i class="fas fa-phone fa-2x"></i>
          <span>010-9309-1797</span>
        </div>
        <div className="contact_list">
          <i class="far fa-envelope fa-2x"></i>
          <span>hslgood@gmail.com</span>
        </div>
        <div className="contact_list">
          <a href="https://github.com/hsl0505" target="top">
            <i class="fab fa-github fa-2x contact_link"></i>
          </a>
          <a href="https://github.com/hsl0505" target="top">
            <span>https://github.com/hsl0505</span>​
          </a>
        </div>
        <div className="contact_list">
          <a href="https://hsl1697.tistory.com" target="top">
            <i class="fas fa-blog fa-2x contact_link"></i>
          </a>
          <a href="https://hsl1697.tistory.com" target="top">
            <span>https://hsl1697.tistory.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
