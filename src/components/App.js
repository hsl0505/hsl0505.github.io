import React, { Fragment, useState, useEffect } from "react";

import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";

function App() {
  const [showNav, setNav] = useState();

  function onScroll() {
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
              }
            : {}
        }
      >
        <Navigation />
      </nav>
      <main>
        <section className="section_about">
          <About />
        </section>
        <section className="project">플젝</section>
      </main>
    </Fragment>
  );
}

export default App;
