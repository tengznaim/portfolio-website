import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Divider from "./components/Divider/Divider";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import SidebarProto from "./components/SidebarProto/SidebarProto";
import Skills from "./components/Skills/Skills";
import Showcase from "./components/Showcase/Showcase";
import Contact from "./components/Contact/Contact";

function App() {
  const [isOpen, setOpen] = useState(true);
  function handleClick() {
    setOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div>
      {/* <Sidebar isOpen={isOpen} handleClick={handleClick} /> */}
      <Logo />
      {/* <Navbar handleClick={handleClick} /> */}
      <Hero />
      <SidebarProto isOpen={isOpen} handleClick={handleClick} />
      <About />
      <Skills />
      <Showcase />
      <Contact />
    </div>
  );
}

export default App;
