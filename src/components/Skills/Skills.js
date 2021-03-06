import React, { useState } from "react";
import Divider from "../Divider/Divider";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./Skills.css";

function Skills() {
  const [select, setSelect] = useState("");
  const data = {
    Languages: ["Java", "JavaScript", "Python"],
    Technologies: [
      "MySQL",
      "React JS",
      "Node JS",
      "JSoup",
      "Google Places API",
    ],
    Design: ["Adobe Illustrator", "Adobe XD", "Adobe Photoshop"],
  };

  function handleClick(event) {
    if (event.target.name === "back-button") {
      setSelect("");
    } else {
      setSelect(event.target.name);
    }
  }

  return (
    <div className="skills-container" id="skills">
      <Divider />
      <div className="skills-content-container">
        <div
          className="skills-description"
          data-aos="fade"
          data-aos-anchor="#skills">
          <h1 className="skills-item" id="skills-tag">
            &lt;Skills&gt;
          </h1>
          <p className="skills-item" id="skills-paragraph">
            Over only a few years of exposure, I've tinkered with multiple
            <span id="highlighted"> languages</span>,{" "}
            <span id="highlighted">technologies</span> and{" "}
            <span id="highlighted">design</span> tools be it for assignments,
            hackathons or just a matter of self-interest. With my craving for
            learning and passion, I hope to see these lists expand as I grow as
            a developer!
          </p>
        </div>
        <div
          className="skills-window"
          data-aos="fade"
          data-aos-anchor="#skills">
          <button
            className={select ? "back-button active" : "back-button"}
            onClick={handleClick}>
            <MdKeyboardArrowLeft />
          </button>
          <div className="window-buttons">
            <div className="display-button" id="gray-button"></div>
            <div className="display-button" id="yellow-button"></div>
            <div className="display-button" id="red-button"></div>
          </div>
          {!select ? (
            <div className="selector-buttons">
              <p className="selector-item">Click to View:</p>
              <button
                name="Languages"
                className="selector-item"
                onClick={handleClick}>
                Languages
              </button>
              <button
                name="Technologies"
                className="selector-item"
                onClick={handleClick}>
                Technologies
              </button>
              <button
                name="Design"
                className="selector-item"
                onClick={handleClick}>
                Design
              </button>
            </div>
          ) : (
            <div className="window-content">
              {data[select].map((data, index) => (
                <p
                  className="data-item animate__animated animate__fadeIn"
                  key={index}>
                  <MdKeyboardArrowRight />
                  {data}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
