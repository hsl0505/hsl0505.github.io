import React, { Fragment, useState, useEffect } from "react";

import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import Project from "./Project";

function App() {
  const [showNav, setNav] = useState();

  const [aboutTitleText, setAboutTitleText] = useState(false);
  const [aboutTitleUnder, setAboutTitleUnder] = useState(false);
  const [aboutIcon, setAboutIcon] = useState(false);
  const [aboutMyImg, setMyImg] = useState(false);
  const [aboutMyText, setMyText] = useState(false);
  const [aboutMySkillText, setMySkillText] = useState(false);
  const [aboutMySkillContent, setMySkillContent] = useState(false);

  function onScroll() {
    console.log(document.documentElement.scrollTop);

    if (!aboutTitleText && document.documentElement.scrollTop > 400) {
      setAboutTitleText(true);
    }

    if (!aboutTitleUnder && document.documentElement.scrollTop > 420) {
      setAboutTitleUnder(true);
    }

    if (!aboutIcon && document.documentElement.scrollTop > 630) {
      setAboutIcon(true);
    }

    if (!aboutMyImg && document.documentElement.scrollTop > 1000) {
      setMyImg(true);
    }

    if (!aboutMyText && document.documentElement.scrollTop > 1007) {
      setMyText(true);
    }

    if (
      !aboutMySkillText &&
      window.innerWidth >= 1024 &&
      document.documentElement.scrollTop > 1000
    ) {
      setMySkillText(true);
    } else if (
      !aboutMySkillText &&
      window.innerWidth < 1024 &&
      document.documentElement.scrollTop > 1220
    ) {
      setMySkillText(true);
    }

    if (
      !aboutMySkillContent &&
      window.innerWidth >= 1024 &&
      document.documentElement.scrollTop > 1007
    ) {
      setMySkillContent(true);
    } else if (
      !aboutMySkillContent &&
      window.innerWidth < 1024 &&
      document.documentElement.scrollTop > 1470
    ) {
      setMySkillContent(true);
    }

    if (
      document.documentElement.scrollTop >
      window.innerHeight + window.innerHeight * 0.062
    ) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [showNav]);

  return (
    <Fragment>
      <header>
        <Home />
      </header>
      <nav
        style={
          showNav
            ? {
                position: "fixed",
                top: "0",
                width: "100%",
                animationName: "navAnimation",
                animationDuration: "1s",
                animationDirection: "fowards",
                zIndex: "1",
              }
            : {}
        }
      >
        <Navigation />
      </nav>
      <main>
        <section className="section_about">
          <About
            aboutTitleText={aboutTitleText}
            aboutTitleUnder={aboutTitleUnder}
            aboutIcon={aboutIcon}
            aboutMyImg={aboutMyImg}
            aboutMyText={aboutMyText}
            aboutMySkillText={aboutMySkillText}
            aboutMySkillContent={aboutMySkillContent}
          />
        </section>
        <section className="section_project">
          <Project />
        </section>
      </main>
    </Fragment>
  );
}

export default App;
