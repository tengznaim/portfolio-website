import React, { useState } from "react";
import Divider from "../Divider/Divider";
import { BsFillCaretRightFill } from "react-icons/bs";
import "./Skills.css";

function Skills() {
  const [select, setSelect] = useState("Languages");
  const data = {
    Languages: ["Java", "JavaScript", "Python"],
    Technologies: ["MySQL", "React JS", "Node JS", "JSoup"],
    Design: ["Adobe Illustrator", "Adobe XD", "Adobe Photoshop"],
  };

  function handleClick(event) {
    setSelect(event.target.innerText);
  }

  return (
    <div className="skills-container" id="skills">
      <Divider />
      <div className="content-container">
        <h1 className="about-item" id="about-tag">
          &lt;Skills&gt;
        </h1>
        <p className="about-item" id="about-paragraph">
          These lists comprise of the current tools that I've tinkered with in
          various fields. (Which will hopefully expand as I grow as a developer)
        </p>
        <div className="about-item selector-container">
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
        <div className="about-item data-container">
          {data[select].map((item, index) => (
            <p key={index} class="data-item">
              <BsFillCaretRightFill />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
