import React, { useState } from "react";
import ImageSlider from "../../ImageSlider";
import { SliderData } from "../../SliderData";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <div className="gallery-container">
        <ImageSlider slides={SliderData} />
      </div>
    </>
  );
}

export default Gallery;
