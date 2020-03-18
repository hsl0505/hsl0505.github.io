import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@material-ui/core";

function Navbar() {
  const initScroll = window.scrollY || document.documentElement.scrollTop;
  const [scroll, setScroll] = useState(initScroll);

  useEffect(() => {
    window.addEventListener("scroll", e => {
      setScroll(window.scrollY || document.documentElement.scrollTop);
    });
  }, []);

  return (
    <div className="Navbar" style={{ top: scroll > 100 ? "20%" : "2%" }}>
      <ButtonGroup
        size="large"
        orientation={scroll > 100 ? "vertical" : "horizontal"}
        variant="text"
      >
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Skills</Button>
        <Button>Project</Button>
        <Button>Contact</Button>
      </ButtonGroup>
    </div>
  );
}

export default Navbar;
