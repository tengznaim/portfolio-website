import React, { useState } from "react";
import Divider from "../Divider/Divider";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Skills.css";

function Skills() {
  const [select, setSelect] = useState("Languages");
  const data = {
    Languages: ["Java", "JavaScript", "Python"],
    Technologies: ["MySQL", "React JS", "Node JS", "JSoup", "Google Maps API"],
    Design: ["Adobe Illustrator", "Adobe XD", "Adobe Photoshop"],
  };

  function handleClick(event) {
    setSelect(event.target.innerText);
  }

  return (
    <div className="skills-container" id="skills">
      <Divider />
      <div className="skills-content-container">
        <h1 className="skills-item" id="skills-tag">
          &lt;Skills&gt;
        </h1>
        <p className="skills-item" id="skills-paragraph">
          Over only a few years of exposure, I've tinkered with multiple
          languages, technologies and design tools be it for assignments,
          hackathons or just a matter of self-interest. With my craving for
          learning and passion, I hope to see these lists expand as I grow as a
          developer!
        </p>
        <div className="skills-item selector-container">
          <h2
            className={
              select === "Languages" ? "selector-item active" : "selector-item"
            }
            onClick={handleClick}>
            Languages
          </h2>
          <h2
            className={
              select === "Technologies"
                ? "selector-item active"
                : "selector-item"
            }
            onClick={handleClick}>
            Technologies
          </h2>
          <h2
            className={
              select === "Design" ? "selector-item active" : "selector-item"
            }
            onClick={handleClick}>
            Design
          </h2>
        </div>
        <div className="skills-item data-container">
          {data[select].map((item, index) => (
            <p key={index} className="data-item">
              <MdKeyboardArrowRight />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
