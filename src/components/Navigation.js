import React, { Fragment, useState } from "react";
import NavigationDropMenu from "./NavigationDropMenu";

export default function Navigation() {
  const [showDropMenu, setShowDropMenu] = useState(false);

  return (
    <Fragment>
      <ul className="Navigation">
        <li className="temp">HOME</li>
        <li>ABOUT</li>
        <li>PROJECT</li>
        <li>CONTACT</li>
        <i
          className="fas fa-bars fa-2x"
          onClick={() => {
            if (!showDropMenu) {
              setShowDropMenu(true);
            } else {
              setShowDropMenu(false);
            }
          }}
        ></i>
      </ul>
      {showDropMenu ? <NavigationDropMenu /> : <div />}
    </Fragment>
  );
}
