import React, { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    setOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} handleClick={handleClick} />
      <Logo />
      <Navbar handleClick={handleClick} />
      <Hero />
      <About />
    </div>
  );
}

export default App;
