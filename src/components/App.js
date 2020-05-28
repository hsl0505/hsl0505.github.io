import React, { Fragment, useState, useEffect } from "react";

import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";

function App() {
  const [showNav, setNav] = useState();

  const [aboutTitleText, setAboutTitleText] = useState(false);
  const [aboutTitleUnder, setAboutTitleUnder] = useState(false);
  const [aboutIcon, setAboutIcon] = useState(false);
  const [aboutMyImg, setMyImg] = useState(false);
  const [aboutMyText, setMyText] = useState(false);
  // const [aboutSkillTitle, setSkillTitle] = useState(false);

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

    if (!aboutMyText && document.documentElement.scrollTop > 1012) {
      setMyText(true);
    }

    if (document.documentElement.scrollTop > 1004) {
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
          />
        </section>
        <section className="project">플젝</section>
      </main>
    </Fragment>
  );
}

export default App;
