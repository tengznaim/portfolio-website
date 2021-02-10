import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../../Personal Logo.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  const [logoVisible, setVisibility] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const curr = document.body.getBoundingClientRect().top;
    if (curr <= -80 && curr < scrollPos) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
    setScrollPos(curr);
  }

  return (
    <div className={logoVisible ? "logo-container" : "logo-container hidden"}>
      <LogoSVG className="logo-item"></LogoSVG>
    </div>
  );
}

export default Logo;
