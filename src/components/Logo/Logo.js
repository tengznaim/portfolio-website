import React from "react";
import { ReactComponent as LogoSVG } from "../../Personal Logo.svg";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container" id="home">
      <LogoSVG className="logo-item"></LogoSVG>
    </div>
  );
}

export default Logo;
