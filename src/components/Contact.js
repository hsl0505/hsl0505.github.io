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
          <li>
            <i className="fas fa-mobile-alt fa-3x"></i>
            <span>010.9309.1697</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-blog fa-3x"></i>
            <span>asjdklasd</span>
          </li>
          <li>
            <i className="fab fa-github fa-3x"></i>
            <span>asdfdsf</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
