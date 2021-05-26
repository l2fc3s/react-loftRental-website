import React from "react";
import "../../App.css";
import Landing from "./Landing";
import About from "../pages/About/About";
import { aboutObjOne } from "./Data";
import Gallery from "../pages/Gallery/Gallery";

function Home() {
  return (
    <>
      <Landing />
      <About {...aboutObjOne} />
      <Gallery />
    </>
  );
}

export default Home;
