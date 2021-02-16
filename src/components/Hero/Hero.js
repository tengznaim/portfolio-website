import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div className="home-container" id="home">
      <h1 className="home-greeting animate__animated animate__fadeIn">Hello</h1>
      <div className="home-content-container animate__animated animate__fadeIn animate__delay-1s">
        <p id="home-first-line">
          <span id="greeting-small-alternate">Hi! </span>I'm
        </p>
        <h1 id="home-second-line">Tengku Naim</h1>
        <p id="home-third-line">
          a <span id="home-highlighted">computer science</span> sophomore at
          <span id="home-highlighted"> University of Malaya</span>
        </p>
      </div>
      <LinkScroll to="about" smooth={true} duration={1000}>
        <button className="home-continue-button">
          <FaChevronDown />
        </button>
      </LinkScroll>
    </div>
  );
}

export default Hero;
