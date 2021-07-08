import React from "react";
import "./Landing.css";
import { HashLink } from "react-router-hash-link";

function Landing() {
  return (
    <div id="landing" className="landing-container">
      <h1 className="landing-header">The Art of Living</h1>
      <p>Designer loft spaces</p>
      <HashLink className="arrow-icon" smooth to="#about-section">
        <i className="fas fa-chevron-circle-down"></i>
      </HashLink>
    </div>
  );
}

export default Landing;
