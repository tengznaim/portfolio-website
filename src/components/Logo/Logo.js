import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../../assets/Personal Logo.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    console.log(document);
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      const curr = document.body.getBoundingClientRect().top;
      if (curr <= -80 && curr < scrollPos) {
        setLogoVisible(false);
      } else if (curr > scrollPos) {
        setLogoVisible(true);
      }
      setScrollPos(curr);
    }

    //Cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <header
      className={logoVisible ? "logo-container" : "logo-container hidden"}>
      <LogoSVG className="logo-item"></LogoSVG>
    </header>
  );
}

export default Logo;
