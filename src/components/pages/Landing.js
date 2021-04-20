import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing-header">The Art of Living</h1>
      <p>Designer loft spaces</p>
      <Link className="arrow-icon" to="/">
        <i class="fas fa-chevron-circle-down"></i>
      </Link>
    </div>
  );
}

export default Landing;
