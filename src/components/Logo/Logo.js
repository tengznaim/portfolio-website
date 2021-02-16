import React, { useEffect, useState } from "react";
import { ReactComponent as LogoSVG } from "../../assets/Personal Logo.svg";
import { ReactComponent as LogoAlt } from "../../assets/Personal Logo No Text.svg";
import { Link as LinkScroll } from "react-scroll";
import "./Logo.css";
import { FaBars } from "react-icons/fa";

function Logo(props) {
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
      <LogoAlt className="logo-item" />
      <button className="mobile-nav" onClick={props.handleClick}>
        <FaBars />
      </button>
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
