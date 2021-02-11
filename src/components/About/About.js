import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="content-container">
        <h1 className="about-item" id="about-tag">
          &lt;About&gt;
        </h1>
        <h1 className="about-item" id="about-greeting">
          Hello!
        </h1>
        <p className="about-item" id="about-paragraph">
          I'm <span id="about-highlighted">Naim</span>! I'm a{" "}
          <span id="about-highlighted">Computer Science </span>
          student specialising in{" "}
          <span id="about-highlighted">Artificial Intelligence</span> (expected
          graduation: 2023). Despite my specialisation, I enjoy exploring the
          various fields of CS and am always open to learning new things. I also
          pride myself with having a creative side and really love cookies (the
          edible kind). 🍪
        </p>
        <button className="about-item" id="contact-button">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default About;
