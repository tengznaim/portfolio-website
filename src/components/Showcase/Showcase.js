import React from "react";
import "./Showcase.css";
import Divider from "../Divider/Divider";

function Showcase() {
  return (
    <div className="showcase-container" id="showcase">
      <Divider />
      <div className="showcase-content-container">
        <h1 className="showcase-item" id="showcase-tag">
          &lt;Showcase&gt;
        </h1>
        <h2 className="showcase-item" id="showcase-subheading">
          EcoNet : A Global Finalist at UniHack 2020
        </h2>
        <p className="showcase-item" id="showcase-paragraph">
          I love hackathons as I get to explore a lot of new things, come up
          with solutions to real life problems and develop prototypes in a short
          amount of time. For{" "}
          <a href="https://unihack.eu/" target="_blank">
            UniHack 2020
          </a>
          , my team developed EcoNet, a web application aimed to connect users
          with their nearby recycling centers in an effort to encourage
          recycling. We were successfully chosen as finalists among 60+ teams
          and ranked 3rd out of 5 global finalists 🏆
        </p>
        <p className="showcase-item" id="showcase-paragraph">
          Built With: <br></br>React JS | Google Maps API | Lack of Sleep
        </p>
        <a href="https://github.com/tengznaim/EcoNet" target="_blank">
          <button className="showcase-item" id="showcase-button">
            View this Project on GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Showcase;
