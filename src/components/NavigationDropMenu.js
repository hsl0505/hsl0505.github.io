import React, { Fragment } from "react";

export default function NavigationDropMenu(props) {
  const { curLocation, moveScroll, setShowDropMenu } = props;
  return (
    <Fragment>
      <ul className="NavigationDropMenu">
        <li
          className={curLocation === "home" ? "curLocation" : ""}
          onClick={() => {
            moveScroll(0, 0);
            setShowDropMenu(false);
          }}
        >
          HOME
        </li>
        <li className={curLocation === "about" ? "curLocation" : ""}>ABOUT</li>
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
