import React from "react";
import { Link as LinkScroll } from "react-scroll";
import "./Hero.css";

function Hero() {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <p className="home-content" id="home-title">
          Hi! I'm
        </p>
        <h1 className="home-content" id="home-name">
          Tengku Naim
        </h1>
        <p className="home-content" id="home-text">
          a <span id="home-highlighted">computer science</span> sophomore at
          <span id="home-highlighted"> University of Malaya</span>
        </p>
        <LinkScroll to="about" smooth={true} duration={1000}>
          <button className="home-content" id="home-btn">
            Get to know me!
          </button>
        </LinkScroll>
      </div>
    </div>
  );
}

export default Hero;
