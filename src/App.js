import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Showcase from "./components/Showcase/Showcase";
import Contact from "./components/Contact/Contact";
import "animate.css"; //Imports animate.css
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1250,
      delay: 500,
    });
    AOS.refresh();
  }, []);

  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} handleClick={handleClick} />
      <Logo isOpen={isOpen} handleClick={handleClick} />
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Contact />
    </div>
  );
}

export default App;
