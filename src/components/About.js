import React, { Fragment } from "react";

export default function About(props) {
  const { aboutTitleText, aboutTitleUnder } = props;

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
          <i className="fas fa-rocket fa-7x"></i>
          <i className="fas fa-users fa-7x"></i>
        </div>
      </div>
    </Fragment>
  );
}
