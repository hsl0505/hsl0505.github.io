import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <div className="Contact_title">
        <div className="title_text">CONTACT</div>
        <div className="title_underline"></div>
      </div>

      <div className="Contact_list">
        <ul>
          <li>
            <i className="far fa-envelope fa-3x"></i>
            <span>hslgood@gmail.com</span>
          </li>
          <li className="secondIcon">
            <i className="fas fa-mobile-alt fa-3x"></i>
            <span>010.9309.1697</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-blog fa-3x"></i>
            <span>
              <a href="https://hsl1697.tistory.com/" target="blank">
                https://hsl1697.tistory.com/
              </a>
            </span>
          </li>
          <li className="secondIcon">
            <i className="fab fa-github fa-3x"></i>
            <span>
              <a href="https://github.com/hsl0505" target="blank">
                https://github.com/hsl0505
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="copyright_text">
        hyunsung <span>@2020</span>
      </div>
    </Fragment>
  );
}
