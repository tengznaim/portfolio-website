import React from "react";
import "./SidebarProto.css";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";

function SidebarProto(props) {
  return (
    <div className="sidebar-container">
      <button className="sidebar-toggle" onClick={props.handleClick}>
        <FaBars />
      </button>
      <div
        className={
          props.isOpen
            ? "sidebar-link-container"
            : "sidebar-link-container aside"
        }>
        <button className="sidebar-close-button" onClick={props.handleClick}>
          <FaTimes />
        </button>
        <ul className="sidebar-links">
          <li className="sidebar-link">
            <LinkScroll
              to="home"
              className="sidebar-item"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              activeClass="sidebar-item active">
              Home
            </LinkScroll>
          </li>
          <li className="sidebar-link">
            <LinkScroll
              to="about"
              className="sidebar-item"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              activeClass="sidebar-item active">
              About
            </LinkScroll>
          </li>
          <li className="sidebar-link">
            <LinkScroll
              to="skills"
              className="sidebar-item"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              activeClass="sidebar-item active">
              Skills
            </LinkScroll>
          </li>
          <li className="sidebar-link">
            <LinkScroll
              to="projects"
              className="sidebar-item"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              activeClass="sidebar-item active">
              Projects
            </LinkScroll>
          </li>
          <li className="sidebar-link">
            <LinkScroll
              to="contact"
              className="sidebar-item"
              smooth={true}
              duration={1000}
              spy={true}
              offset={-80}
              activeClass="sidebar-item active">
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarProto;
