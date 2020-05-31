import React, { Fragment, useState, useEffect } from "react";
import NavigationDropMenu from "./NavigationDropMenu";

export default function Navigation() {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [curLocation, setCurLocation] = useState("home");

  function setCurLocationFunc() {
    if (
      document.documentElement.scrollTop <=
      window.innerHeight + window.innerHeight * 0.06
    ) {
      setCurLocation("home");
    } else if (
      document.documentElement.scrollTop > window.innerHeight &&
      document.documentElement.scrollTop <=
        window.innerHeight * 2.3 - window.innerHeight * 0.06
    ) {
      setCurLocation("about");
    } else if (
      document.documentElement.scrollTop >
        window.innerHeight * 2.3 - window.innerHeight * 0.06 &&
      document.documentElement.scrollTop <=
        window.innerHeight * 3.85 - window.innerHeight * 0.6
    ) {
      setCurLocation("project");
    } else if (
      document.documentElement.scrollTop >
      window.innerHeight * 3.85 - window.innerHeight * 0.6
    ) {
      setCurLocation("contact");
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
        <li
          className={curLocation === "about" ? "curLocation" : ""}
          onClick={() =>
            moveScroll(window.innerHeight + window.innerHeight * 0.065, 0)
          }
        >
          ABOUT
        </li>
        <li
          className={curLocation === "project" ? "curLocation" : ""}
          onClick={() =>
            moveScroll(window.innerHeight * 2.3 - window.innerHeight * 0.06, 0)
          }
        >
          PROJECT
        </li>
        <li
          className={curLocation === "contact" ? "curLocation" : ""}
          onClick={() =>
            moveScroll(window.innerHeight * 3.85 - window.innerHeight * 0.5, 0)
          }
        >
          CONTACT
        </li>
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
