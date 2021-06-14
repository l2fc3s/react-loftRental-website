import React from "react";
import "../../App.css";
import Landing from "./Landing";
import About from "../pages/About/About";
import { aboutObjOne } from "./Data";
import Gallery from "../pages/Gallery/Gallery";
import { SliderData } from "../SliderData";

function Home() {
  return (
    <>
      <Landing />
      <About {...aboutObjOne} />
      <Gallery slides={SliderData} />
    </>
  );
}

export default Home;
