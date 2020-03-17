import React from "react";
import "../style.css";

import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
