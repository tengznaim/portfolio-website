import React from "react";
import "./Navbar.css";
import { Link as LinkScroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="navbar-container">
        <div className="navbar-mobile-icon" onClick={props.handleClick}>
          <FaBars />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <LinkScroll
              to="home"
              className="nav-link"
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="nav-link active">
              Home
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll
              to="about"
              className="nav-link"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-50}
              activeClass="nav-link active">
              About
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll to="skills" className="nav-link">
              Skills
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll to="experience" className="nav-link">
              Experience
            </LinkScroll>
          </li>
          <li className="nav-item">
            <LinkScroll to="contact" className="nav-link">
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
