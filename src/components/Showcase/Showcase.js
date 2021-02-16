import React from "react";
import "./Showcase.css";
import Divider from "../Divider/Divider";

function Showcase() {
  return (
    <div className="showcase-container" id="showcase">
      <Divider />
      <div className="showcase-content-container">
        <h1
          className="showcase-item"
          id="showcase-tag"
          data-aos="fade"
          data-aos-anchor="#showcase">
          &lt;Showcase&gt;
        </h1>
        <h2
          className="showcase-item"
          id="showcase-subheading"
          data-aos="fade"
          data-aos-anchor="#showcase">
          EcoNet : A Global Finalist at UniHack 2020
        </h2>
        <p
          className="showcase-item"
          id="showcase-paragraph"
          data-aos="fade"
          data-aos-anchor="#showcase">
          I absolutely love hackathons and have participated in a few of them
          over the years. For{" "}
          <a href="https://unihack.eu/" target="_blank">
            UniHack 2020
          </a>
          , my team developed <span id="highlighted"> EcoNet</span>, a web
          application aimed to connect users with their nearby recycling centers
          in an effort to encourage recycling. We were successfully chosen as
          finalists among 60+ teams and ranked{" "}
          <span id="highlighted"> 3rd</span> out of 5 global finalists 🏆
        </p>
        <p
          className="showcase-item"
          id="showcase-paragraph"
          data-aos="fade"
          data-aos-anchor="#showcase">
          Built With: <br></br>React JS | Google Places API | Lack of Sleep
        </p>
        <a
          href="https://github.com/tengznaim/EcoNet"
          target="_blank"
          data-aos="fade"
          data-aos-anchor="#showcase">
          <button className="showcase-item" id="showcase-button">
            View this Project on GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Showcase;
