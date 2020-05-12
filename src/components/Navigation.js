import React, { Fragment, useState, useEffect } from "react";
import NavigationDropMenu from "./NavigationDropMenu";

export default function Navigation() {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [curLocation, setCurLocation] = useState("home");

  function setCurLocationFunc() {
    if (document.documentElement.scrollTop < 1004) {
      setCurLocation("home");
    } else if (document.documentElement.scrollTop > 1004) {
      setCurLocation("about");
    }
  }

  function moveScroll(top, left) {
    window.scrollTo({ top, left, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", setCurLocationFunc);
  }, [curLocation]);

  return (
    <Fragment>
      <ul className="Navigation">
        <li
          className={curLocation === "home" ? "curLocation" : ""}
          onClick={() => moveScroll(0, 0)}
        >
          HOME
        </li>
        <li className={curLocation === "about" ? "curLocation" : ""}>ABOUT</li>
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
      {showDropMenu ? (
        <NavigationDropMenu
          curLocation={curLocation}
          moveScroll={moveScroll}
          setShowDropMenu={setShowDropMenu}
        />
      ) : (
        <div />
      )}
    </Fragment>
  );
}
