import React from "react";
import "./About.css";
import img from "../../images/daniil-silantev-sN4u56baSB0-unsplash.jpg";
import { Button } from "../Button";

function About() {
  return (
    // solid bg
    // headline
    // short paragraph on left
    // image on right
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-headline">A better way to stay</h1>
        <p>
          Modern design, contact-free service, and exceptional comfort with more
          space to live, work, and play.
        </p>
        <Button buttonStyle="btn--dark">Learn more</Button>
      </div>

      <div className="about-image">
        <img className="img" src={img} alt="Image" />
      </div>
    </div>
  );
}

export default About;
