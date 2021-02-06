import React from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

function Sidebar(props) {
  if (props.isOpen) {
    return (
      <div className="sidebar-container-open">
        <div className="close-icon" onClick={props.handleClick}>
          <FaTimes />
        </div>
        <div className="sidebar-link-container">
          <LinkScroll
            to="home"
            className="sidebar-link"
            smooth={true}
            duration={1000}
            onClick={props.handleClick}>
            Home
          </LinkScroll>
          <LinkScroll
            to="about"
            className="sidebar-link"
            smooth={true}
            duration={1000}
            onClick={props.handleClick}>
            About
          </LinkScroll>
          <LinkScroll
            to="skills"
            className="sidebar-link"
            smooth={true}
            duration={1000}
            onClick={props.handleClick}>
            Skills
          </LinkScroll>
          <LinkScroll
            to="experience"
            className="sidebar-link"
            smooth={true}
            duration={1000}
            onClick={props.handleClick}>
            Experience
          </LinkScroll>
          <LinkScroll
            to="contact"
            className="sidebar-link"
            smooth={true}
            duration={1000}
            onClick={props.handleClick}>
            Contact
          </LinkScroll>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-container-closed">
        <div className="sidebar-link-container"></div>
      </div>
    );
  }
}

export default Sidebar;
