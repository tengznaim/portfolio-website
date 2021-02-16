import React from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

function Sidebar(props) {
  if (props.isOpen) {
    return (
      <div className="sidebar-container-open">
        <button className="sidebar-close-button" onClick={props.handleClick}>
          <FaTimes />
        </button>
        <ul className="sidebar-link-container">
          <li className="sidebar-link-item">
            <LinkScroll
              to="home"
              smooth={true}
              duration={1000}
              spy={true}
              className="sidebar-link"
              activeClass="sidebar-link active"
              onClick={props.handleClick}>
              Home
            </LinkScroll>
          </li>
          <li className="sidebar-link-item">
            <LinkScroll
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              className="sidebar-link"
              activeClass="sidebar-link active"
              onClick={props.handleClick}>
              About
            </LinkScroll>
          </li>
          <li className="sidebar-link-item">
            <LinkScroll
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              className="sidebar-link"
              activeClass="sidebar-link active"
              onClick={props.handleClick}>
              Skills
            </LinkScroll>
          </li>
          <li className="sidebar-link-item">
            <LinkScroll
              to="showcase"
              smooth={true}
              duration={1000}
              spy={true}
              className="sidebar-link"
              activeClass="sidebar-link active"
              onClick={props.handleClick}>
              Showcase
            </LinkScroll>
          </li>
          <li className="sidebar-link-item">
            <LinkScroll
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              className="sidebar-link"
              activeClass="sidebar-link active"
              onClick={props.handleClick}>
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="sidebar-container-closed"></div>;
  }
}

export default Sidebar;
