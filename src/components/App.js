import React, { Fragment } from "react";

import Home from "./Home";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";

import MySkills from "./MySkills";

function App() {
  return (
    <Fragment>
      <header>
        <Home />
      </header>
      <nav>
        <Navigation />
      </nav>
      <main>
        <section className="about">test</section>
      </main>

      {/* <div className="master_text">Master</div>
      <AboutMe />
      <MySkills /> */}
    </Fragment>
  );
}

export default App;
