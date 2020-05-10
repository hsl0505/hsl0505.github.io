import React, { Fragment } from "react";

export default function NavigationDropMenu() {
  return (
    <Fragment>
      <ul className="NavigationDropMenu">
        <li>
          <div className="temp">HOME</div>
        </li>
        <li>
          <div>ABOUT</div>
        </li>
        <li>
          <div>PROJECT</div>
        </li>
        <li>
          <div>CONTACT</div>
        </li>
      </ul>
    </Fragment>
  );
}
