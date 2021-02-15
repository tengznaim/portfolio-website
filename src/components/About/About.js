import React from "react";
import { Link as LinkScroll } from "react-scroll";
import Divider from "../Divider/Divider";
import "./About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <Divider />
      <div className="content-container">
        <h1 className="about-item" id="about-tag">
          &lt;About&gt;
        </h1>
        <h1 className="about-item" id="about-greeting">
          Hi, I'm Naim!
        </h1>
        <p className="about-item" id="about-paragraph">
          I'm a <span id="about-highlighted">Computer Science </span>
          undergraduate specialising in{" "}
          <span id="about-highlighted">Artificial Intelligence 🤖 </span>
          based in <span id="about-highlighted">
            Kuala Lumpur, Malaysia
          </span>{" "}
          (expected graduation: 2023). Despite my specialisation, I enjoy
          exploring the various fields of CS, always open to learning new things
          and generally enjoy solving problems through code. I also pride myself
          with having a creative side and really love cookies (the edible kind).
          🍪
        </p>
        <LinkScroll to="contact" smooth={true} duration={1000}>
          <button className="about-item" id="contact-button">
            Get in Touch
          </button>
        </LinkScroll>
      </div>
    </div>
  );
}

export default About;
