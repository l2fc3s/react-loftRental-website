import React from "react";
import "../../App.css";
import Landing from "./Landing";
import About from "../pages/About/About";
import { aboutObjOne } from "./Data";

function Home() {
  return (
    <>
      <Landing />
      <About {...aboutObjOne} />
    </>
  );
}

export default Home;
