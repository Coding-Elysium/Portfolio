import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import { AnimatedBackground } from "animated-backgrounds";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <AnimatedBackground animationName="starryNight" />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
