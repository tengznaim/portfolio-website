import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../../assets/Personal Logo.svg";
import { Link as LinkScroll } from "react-scroll";
import "./Logo.css";

function Logo() {
  const [logoVisible, setLogoVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
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
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <LinkScroll
              to="home"
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="nav-link active"
              className="nav-link">
              Home
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="nav-link active"
              className="nav-link">
              About
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="nav-link active"
              className="nav-link">
              Skills
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="showcase"
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="nav-link active"
              className="nav-link">
              Showcase
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="nav-link active"
              className="nav-link">
              Contact
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Logo;
