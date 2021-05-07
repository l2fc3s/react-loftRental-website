import React from "react";
import "./About.css";
import { Button } from "../../Button";
import image from "../../../images/daniil-silantev-sN4u56baSB0-unsplash.jpg";

function About({ headline, description }) {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-headline">{headline}</h1>
        <p>{description}</p>

        <div className="button-container">
          <Button buttonSize="btn--medium" buttonStyle="btn--dark">
            Learn more
          </Button>
        </div>
      </div>

      <div className="about-image">
        <img className="img" src={image} alt="chair" />
      </div>
    </div>
  );
}

export default About;
